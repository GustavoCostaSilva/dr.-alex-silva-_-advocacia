import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface QuickAction {
  id: string;
  label: string;
  subLabel?: string;
  icon: React.ComponentType<any>;
  onClick?: () => void;
  href?: string;
  primary?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}