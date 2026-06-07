/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServicePoint {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: "layout" | "message" | "search"; // icon names
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  mockupUrl: string;
  duration: string;
  badge?: string;
  externalUrl?: string;
}

export interface DeliverablePackage {
  id: string;
  title: string;
  badge: string;
  description: string;
  includes: string[];
  bottomLabel: string;
  ctaText: string;
}

export interface ProjectPackage {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface LeadSubmission {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  currentWebsite: string;
  location: string;
  packageInterest: string;
  timeline: string;
  message: string;
  wantsWhatsappCrm: boolean;
  leadSource: string;
  pipelineStage: string;
  createdAt: string;
}
