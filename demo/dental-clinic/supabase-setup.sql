-- =========================================================================
-- BRIGHTSMILE DENTAL STUDIO - SUPABASE DATABASE INITIALIZATION SCRIPT
-- =========================================================================
-- Full Postgres schema, foreign keys, check constraints, RLS policies,
-- helper functions, performance indexes, and demo seed data for the
-- Veneer Digital Studio concept demo (fictional dental practice).
--
-- Target Platform: Supabase / PostgreSQL 14+
-- Localisation: South African Standard Time (SAST), ZAR pricing.
--
-- HOW TO USE:
--   1. Create a free Supabase project.
--   2. Open SQL Editor, paste this whole file, click Run.
--   3. Create an admin login: Authentication > Users > Add user
--      (email + strong password, "Auto Confirm" on).
--   4. Copy that user's UUID and run the ADMIN LINK statement at the
--      very bottom of this file (uncomment it and paste the UUID).
--   5. Give Veneer the Project URL + anon public key.
-- =========================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Clean slate if re-running
DROP TABLE IF EXISTS public.appointments CASCADE;
DROP TABLE IF EXISTS public.services CASCADE;
DROP TABLE IF EXISTS public.business_hours CASCADE;
DROP TABLE IF EXISTS public.blocked_dates CASCADE;
DROP TABLE IF EXISTS public.clinic_settings CASCADE;
DROP TABLE IF EXISTS public.admin_users CASCADE;
DROP FUNCTION IF EXISTS public.is_admin CASCADE;

-- ==========================================
-- 1. TABLES
-- ==========================================

-- A. services
CREATE TABLE public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL CHECK (duration_minutes > 0),
    price NUMERIC NOT NULL CHECK (price >= 0),
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- B. appointments
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

-- C. business_hours
CREATE TABLE public.business_hours (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    weekday INTEGER NOT NULL UNIQUE CHECK (weekday >= 0 AND weekday <= 6), -- 0 = Sunday
    is_open BOOLEAN NOT NULL DEFAULT true,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    CONSTRAINT business_times_chronology CHECK (start_time < end_time)
);

-- D. blocked_dates
CREATE TABLE public.blocked_dates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    blocked_date DATE NOT NULL UNIQUE,
    reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- E. clinic_settings
CREATE TABLE public.clinic_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_name TEXT NOT NULL DEFAULT 'BrightSmile Dental Studio',
    clinic_email TEXT NOT NULL DEFAULT 'hello@brightsmiledental.co.za',
    clinic_phone TEXT NOT NULL DEFAULT '012 460 1180',
    clinic_address TEXT NOT NULL DEFAULT 'Shop 4, Waterkloof Corner, Pretoria',
    slot_interval_minutes INTEGER NOT NULL DEFAULT 30 CHECK (slot_interval_minutes IN (15, 30, 45, 60, 120)),
    booking_notice_hours INTEGER NOT NULL DEFAULT 12 CHECK (booking_notice_hours >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- F. admin_users (maps to Supabase Auth UUIDs)
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
ALTER TABLE public.clinic_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- services
CREATE POLICY "Public can read services"
    ON public.services FOR SELECT USING (true);
CREATE POLICY "Admins manage services"
    ON public.services FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

-- business_hours
CREATE POLICY "Public can read business hours"
    ON public.business_hours FOR SELECT USING (true);
CREATE POLICY "Admins manage business hours"
    ON public.business_hours FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

-- blocked_dates
CREATE POLICY "Public can read blocked dates"
    ON public.blocked_dates FOR SELECT USING (true);
CREATE POLICY "Admins manage blocked dates"
    ON public.blocked_dates FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

-- clinic_settings
CREATE POLICY "Public can read clinic settings"
    ON public.clinic_settings FOR SELECT USING (true);
CREATE POLICY "Admins manage clinic settings"
    ON public.clinic_settings FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

-- admin_users
CREATE POLICY "Authenticated can read admin list"
    ON public.admin_users FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins manage admins"
    ON public.admin_users FOR ALL TO authenticated
    USING (public.is_admin()) WITH CHECK (public.is_admin());

-- appointments: public may create bookings and read slots; admins have full control
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
    ('a1000000-0000-4000-8000-000000000001', 'Check-up & Clean', 'A thorough dental examination, professional scale and polish, and personalised oral-health advice to keep your smile healthy.', 45, 650, true),
    ('a1000000-0000-4000-8000-000000000002', 'Teeth Whitening', 'Professional in-chair whitening for a noticeably brighter smile in a single visit, with take-home maintenance guidance.', 60, 2500, true),
    ('a1000000-0000-4000-8000-000000000003', 'Tooth-Coloured Filling', 'Natural-looking composite fillings that restore decayed or damaged teeth while blending seamlessly with your smile.', 45, 950, true),
    ('a1000000-0000-4000-8000-000000000004', 'Root Canal Treatment', 'Gentle, modern root-canal therapy to save an infected tooth and relieve pain, done in comfort with local anaesthetic.', 90, 3800, true),
    ('a1000000-0000-4000-8000-000000000005', 'Tooth Extraction', 'Safe, careful removal of a problematic tooth with clear aftercare instructions for a smooth recovery.', 45, 1200, true),
    ('a1000000-0000-4000-8000-000000000006', 'Dental Implant Consultation', 'A detailed assessment and treatment plan for replacing missing teeth with natural-looking, long-lasting implants.', 60, 850, true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name, description = EXCLUDED.description,
    duration_minutes = EXCLUDED.duration_minutes, price = EXCLUDED.price, is_active = EXCLUDED.is_active;

-- B. Business hours (Mon-Fri full, Sat morning, Sun closed)
INSERT INTO public.business_hours (weekday, is_open, start_time, end_time) VALUES
    (0, false, '09:00:00', '13:00:00'), -- Sunday closed
    (1, true,  '08:00:00', '17:00:00'), -- Monday
    (2, true,  '08:00:00', '17:00:00'), -- Tuesday
    (3, true,  '08:00:00', '17:00:00'), -- Wednesday
    (4, true,  '08:00:00', '17:00:00'), -- Thursday
    (5, true,  '08:00:00', '16:00:00'), -- Friday
    (6, true,  '08:30:00', '13:00:00')  -- Saturday morning
ON CONFLICT (weekday) DO UPDATE SET
    is_open = EXCLUDED.is_open, start_time = EXCLUDED.start_time, end_time = EXCLUDED.end_time;

-- C. Clinic settings (single row)
INSERT INTO public.clinic_settings (id, clinic_name, clinic_email, clinic_phone, clinic_address, slot_interval_minutes, booking_notice_hours) VALUES
    ('a2000000-0000-4000-8000-000000000001', 'BrightSmile Dental Studio', 'hello@brightsmiledental.co.za', '012 460 1180', 'Shop 4, Waterkloof Corner, Pretoria', 30, 12)
ON CONFLICT (id) DO UPDATE SET
    clinic_name = EXCLUDED.clinic_name, clinic_email = EXCLUDED.clinic_email,
    clinic_phone = EXCLUDED.clinic_phone, clinic_address = EXCLUDED.clinic_address,
    slot_interval_minutes = EXCLUDED.slot_interval_minutes, booking_notice_hours = EXCLUDED.booking_notice_hours;

-- D. Blocked dates (upcoming SA public holidays)
INSERT INTO public.blocked_dates (blocked_date, reason) VALUES
    ('2026-08-10', 'National Women''s Day (observed)'),
    ('2026-09-24', 'Heritage Day'),
    ('2026-12-25', 'Christmas Day')
ON CONFLICT (blocked_date) DO UPDATE SET reason = EXCLUDED.reason;

-- E. Sample appointments (upcoming, so the admin calendar looks active)
INSERT INTO public.appointments (id, full_name, email, phone, service_id, appointment_date, start_time, end_time, status, notes) VALUES
    ('a3000000-0000-4000-8000-000000000001', 'Thandeka Nkosi', 'thandeka.nkosi@gmail.com', '082 447 9013', 'a1000000-0000-4000-8000-000000000001', '2026-07-20', '09:00:00', '09:45:00', 'confirmed', 'Regular six-month check-up and clean.'),
    ('a3000000-0000-4000-8000-000000000002', 'Riaan Botha', 'riaan.botha@outlook.com', '071 902 3345', 'a1000000-0000-4000-8000-000000000002', '2026-07-22', '11:00:00', '12:00:00', 'pending', 'Wants whitening before a wedding in August.'),
    ('a3000000-0000-4000-8000-000000000003', 'Fatima Ismail', 'fatima.ismail@gmail.com', '083 210 7788', 'a1000000-0000-4000-8000-000000000004', '2026-07-24', '14:00:00', '15:30:00', 'confirmed', 'Sensitivity on lower right molar, referred for root canal.'),
    ('a3000000-0000-4000-8000-000000000004', 'Sipho Dlamini', 'sipho.d@webmail.co.za', '060 553 1290', 'a1000000-0000-4000-8000-000000000003', '2026-07-15', '10:30:00', '11:15:00', 'completed', 'Two small composite fillings, upper left.')
ON CONFLICT (id) DO NOTHING;

-- =========================================================================
-- 6. ADMIN LINK (run AFTER creating your admin user in Authentication)
-- =========================================================================
-- Replace the UUID below with the id from Authentication > Users, then run:
--
-- INSERT INTO public.admin_users (user_id)
-- VALUES ('PASTE-AUTH-USER-UUID-HERE')
-- ON CONFLICT (user_id) DO NOTHING;
-- =========================================================================
-- END
-- =========================================================================
