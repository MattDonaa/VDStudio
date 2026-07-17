-- =========================================================================
-- LINGENFELDER CUSTOM WOODWORK - SUPABASE DATABASE INITIALIZATION SCRIPT
-- =========================================================================
-- Full Postgres schema, foreign keys, check constraints, RLS policies,
-- helper functions, indexes, and demo seed data for the Veneer Digital
-- Studio concept demo (fictional Bloemfontein woodwork business).
--
-- Target Platform: Supabase / PostgreSQL 14+
--
-- HOW TO USE:
--   1. Create a free Supabase project.
--   2. Open SQL Editor, paste this whole file, click Run.
--   3. Create an admin login: Authentication > Users > Add user
--      (email + strong password, "Auto Confirm" on).
--   4. Copy that user's UUID and run the ADMIN LINK statement at the
--      bottom of this file (uncomment it and paste the UUID).
--   5. Give Veneer the Project URL + anon public key.
-- =========================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Clean slate if re-running
DROP TABLE IF EXISTS public.appointments CASCADE;
DROP TABLE IF EXISTS public.services CASCADE;
DROP TABLE IF EXISTS public.business_hours CASCADE;
DROP TABLE IF EXISTS public.blocked_dates CASCADE;
DROP TABLE IF EXISTS public.business_settings CASCADE;
DROP TABLE IF EXISTS public.admin_users CASCADE;
DROP FUNCTION IF EXISTS public.is_admin CASCADE;

-- ==========================================
-- 1. TABLES
-- ==========================================

CREATE TABLE public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL CHECK (duration_minutes > 0),
    price NUMERIC NOT NULL CHECK (price >= 0),
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service_id UUID NOT NULL REFERENCES public.services(id) ON DELETE RESTRICT,
    appointment_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT appointment_times_chronology CHECK (start_time < end_time)
);

CREATE TABLE public.business_hours (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    weekday INTEGER NOT NULL UNIQUE CHECK (weekday >= 0 AND weekday <= 6), -- 0 = Sunday
    is_open BOOLEAN NOT NULL DEFAULT true,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    CONSTRAINT business_times_chronology CHECK (start_time < end_time)
);

CREATE TABLE public.blocked_dates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    blocked_date DATE NOT NULL UNIQUE,
    reason TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.business_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_name TEXT NOT NULL DEFAULT 'Lingenfelder',
    business_email TEXT NOT NULL DEFAULT 'info@lingenfelder.co.za',
    business_phone TEXT NOT NULL DEFAULT '063 418 7330',
    business_address TEXT NOT NULL DEFAULT '1 Transnet Road, Bloemloco, Bloemfontein',
    slot_interval_minutes INTEGER NOT NULL DEFAULT 30 CHECK (slot_interval_minutes IN (15, 30, 45, 60, 120)),
    booking_notice_hours INTEGER NOT NULL DEFAULT 12 CHECK (booking_notice_hours >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ==========================================
-- 2. INDEXES
-- ==========================================
CREATE INDEX IF NOT EXISTS idx_services_active ON public.services(is_active);
CREATE INDEX IF NOT EXISTS idx_appointments_date_status ON public.appointments(appointment_date, status);
CREATE INDEX IF NOT EXISTS idx_appointments_service ON public.appointments(service_id);
CREATE INDEX IF NOT EXISTS idx_blocked_dates_date ON public.blocked_dates(blocked_date);
CREATE INDEX IF NOT EXISTS idx_business_hours_day ON public.business_hours(weekday);
CREATE INDEX IF NOT EXISTS idx_admin_user_mapping ON public.admin_users(user_id);

-- ==========================================
-- 3. HELPER: is_admin()
-- ==========================================
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- ==========================================
-- 4. ROW LEVEL SECURITY
-- ==========================================
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_hours ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_dates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read services"
    ON public.services FOR SELECT USING (true);
CREATE POLICY "Admins manage services"
    ON public.services FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Public can read business hours"
    ON public.business_hours FOR SELECT USING (true);
CREATE POLICY "Admins manage business hours"
    ON public.business_hours FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Public can read blocked dates"
    ON public.blocked_dates FOR SELECT USING (true);
CREATE POLICY "Admins manage blocked dates"
    ON public.blocked_dates FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Public can read business settings"
    ON public.business_settings FOR SELECT USING (true);
CREATE POLICY "Admins manage business settings"
    ON public.business_settings FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Authenticated can read admin list"
    ON public.admin_users FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins manage admins"
    ON public.admin_users FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Admins full control on appointments"
    ON public.appointments FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Public can submit appointments"
    ON public.appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can read timeslots"
    ON public.appointments FOR SELECT TO public USING (true);

-- ==========================================
-- 5. SEED DATA (demo — makes the site feel live)
-- ==========================================

-- A. Services (ZAR)
INSERT INTO public.services (id, name, description, duration_minutes, price, is_active) VALUES
    ('4b9cf4ab-450f-4886-9ac1-6277f2081f9a', 'Custom Kitchen Cabinets', 'Detailed consultation for made-to-order kitchen cupboards designed around your layout, storage needs, finishes, and the way your family lives.', 60, 450, true),
    ('7c18fc7d-2b47-49d6-95ca-fd1ff37e7535', 'Bathroom Cabinets & Vanities', 'Layout and finish planning for bespoke bathroom storage, vanities, and wall cabinets designed for high-humidity resistance and practical beauty.', 45, 350, true),
    ('0407a016-8326-4d08-8f81-5cbdfa3efb34', 'Bespoke Bedroom Wardrobes', 'Wall-to-wall or floor-to-ceiling customized cupboards, custom linen closets, bedroom drawers, and dressing rooms designed for maximum storage efficiency.', 60, 400, true),
    ('29b5af52-9366-4e55-87c2-f67ca6afbbf9', 'Commercial Shop Fitting', 'Custom shop counters, boutique shelving, commercial reception desks, and modular product displays designed for Bloemfontein retail or office properties.', 90, 850, true),
    ('832049e7-49f3-4fde-ba33-8b65ff7489a2', 'Custom Wood Furniture', 'Made-to-order cabinet pieces, custom timber slabs, dining tables, custom headboards, entryway solid doors, or custom timber decks.', 45, 300, true),
    ('ec0766be-6ef0-48be-81f1-331da0e6cca6', 'Entire House Projects', 'An intensive site survey and comprehensive consultation addressing multi-room joinery, complete cabinetry layouts, solid wood designs, and trim details.', 120, 1200, true)
ON CONFLICT (id) DO UPDATE
SET name = EXCLUDED.name, description = EXCLUDED.description, duration_minutes = EXCLUDED.duration_minutes,
    price = EXCLUDED.price, is_active = EXCLUDED.is_active;

-- B. Business Hours
INSERT INTO public.business_hours (weekday, is_open, start_time, end_time) VALUES
    (0, false, '09:00:00', '13:00:00'), -- Sunday closed
    (1, true,  '08:00:00', '17:00:00'), -- Monday
    (2, true,  '08:00:00', '17:00:00'), -- Tuesday
    (3, true,  '08:00:00', '17:00:00'), -- Wednesday
    (4, true,  '08:00:00', '17:00:00'), -- Thursday
    (5, true,  '08:00:00', '16:00:00'), -- Friday
    (6, true,  '08:30:00', '12:30:00')  -- Saturday half day
ON CONFLICT (weekday) DO UPDATE
SET is_open = EXCLUDED.is_open, start_time = EXCLUDED.start_time, end_time = EXCLUDED.end_time;

-- C. Business Settings
INSERT INTO public.business_settings (id, business_name, business_email, business_phone, business_address, slot_interval_minutes, booking_notice_hours) VALUES
    ('8a4be46b-8772-4d2d-947b-1cb8d312eb81', 'Lingenfelder', 'info@lingenfelder.co.za', '063 418 7330', '1 Transnet Road, Bloemloco, Bloemfontein', 30, 12)
ON CONFLICT (id) DO UPDATE
SET business_name = EXCLUDED.business_name, business_email = EXCLUDED.business_email, business_phone = EXCLUDED.business_phone,
    business_address = EXCLUDED.business_address, slot_interval_minutes = EXCLUDED.slot_interval_minutes, booking_notice_hours = EXCLUDED.booking_notice_hours;

-- D. Blocked Dates (upcoming SA public holidays)
INSERT INTO public.blocked_dates (blocked_date, reason) VALUES
    ('2026-09-24', 'Heritage Day Public Holiday'),
    ('2026-12-25', 'Christmas Day Factory Shutdown')
ON CONFLICT (blocked_date) DO UPDATE SET reason = EXCLUDED.reason;

-- E. Seed Appointments (upcoming)
INSERT INTO public.appointments (id, full_name, email, phone, service_id, appointment_date, start_time, end_time, status, notes) VALUES
    ('1a96eead-1002-466d-8ca1-4ad99ee14a01', 'Petrus Venter', 'petrus@venterarchitects.co.za', '082 555 4120', '4b9cf4ab-450f-4886-9ac1-6277f2081f9a', '2026-07-20', '10:00:00', '11:00:00', 'confirmed', 'Needs solid walnut kitchen drawers, PG Bison charcoal bases. Entire kitchen renovation in Woodlands, Bloemfontein.'),
    ('5c29fe02-23f2-4911-92b5-442841cf6b31', 'Adele Cronje', 'adelecronje@gmail.com', '071 334 1122', '0407a016-8326-4d08-8f81-5cbdfa3efb34', '2026-07-22', '14:00:00', '15:00:00', 'pending', 'Built-in cupboards for two children rooms. Needs lead-free paint and custom toy shelves.'),
    ('a1f496ed-7ca3-48b0-80a2-2396e4dcb320', 'Zander Meyer', 'zander@coffeecorner.co.za', '083 451 9876', '29b5af52-9366-4e55-87c2-f67ca6afbbf9', '2026-07-24', '09:30:00', '11:00:00', 'confirmed', 'Shop counter and timber bench seating custom fitting for new cafe stall near Preller Walk.')
ON CONFLICT (id) DO NOTHING;

-- =========================================================================
-- ADMIN LINK (run AFTER creating your admin user in Authentication)
-- =========================================================================
-- 1. Supabase dashboard > Authentication > Users > Add user
--    (email + strong password, "Auto Confirm" ON).
-- 2. Copy that user's UUID, paste below, uncomment, and run:
--
-- INSERT INTO public.admin_users (user_id)
-- VALUES ('PASTE-AUTH-USER-UUID-HERE')
-- ON CONFLICT (user_id) DO NOTHING;
-- =========================================================================
-- END OF INITIALIZATION SCRIPT
-- =========================================================================
