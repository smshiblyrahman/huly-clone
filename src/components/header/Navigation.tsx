"use client";

import Link from "next/link";
import React, { useState } from "react";

interface NavigationProps {
  className?: string;
  isMobile?: boolean;
}

interface LinkItem {
  label: string;
  href?: string;
  key?: string;
  dropdownLinks?: DropdownLink[];
}

interface DropdownLink {
  label: string;
  subLabel?: string;
  href: string;
}

export default function Navigation({ className = "", isMobile = false }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (key: string) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  const mainLinks: LinkItem[] = [
    { label: "Pricing", href: "/pricing" },
    {
      label: "Resources",
      key: "resources",
      dropdownLinks: [
        { label: "Blog", subLabel: "Read our latest insights", href: "/blog" },
        { label: "Docs", subLabel: "Explore our tutorials", href: "https://docs.huly.io" },
        { label: "Changelog", subLabel: "See what's new", href: "https://v1.huly.io/changelog" },
      ]
    },
    {
      label: "Community",
      key: "community",
      dropdownLinks: [
        { label: "X.com", subLabel: "Follow our latest news", href: "https://x.com/huly_io" },
        { label: "LinkedIn", subLabel: "Get updates", href: "https://www.linkedin.com/company/hardcoreeng/" },
        { label: "Youtube", subLabel: "Subscribe to the channel", href: "https://www.youtube.com/@huly_io" },
        { label: "Slack", subLabel: "Join the conversation", href: "https://huly.link/slack" },
        { label: "GitHub", subLabel: "Star us", href: "https://github.com/hcengineering/platform" },
      ]
    },
    { label: "Download", href: "/download" },
  ];

  return (
    <nav className={className}>
      {mainLinks.map((link) => (
        <div key={link.key || link.label} className={`relative ${isMobile ? 'mb-4' : ''}`}>
          {link.href ? (
            <Link
              href={link.href}
              className="text-13 text-grey-90 hover:text-white transition-colors duration-200 font-medium px-3 py-2"
            >
              {link.label}
            </Link>
          ) : (
            <div className="relative">
              <button
                className={`text-13 text-grey-90 hover:text-white transition-colors duration-200 font-medium px-3 py-2 flex items-center gap-1 ${activeDropdown === link.key ? 'text-white' : ''}`}
                onClick={() => link.key && handleDropdownToggle(link.key)}
              >
                {link.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`transition-transform duration-200 ${activeDropdown === link.key ? 'rotate-180' : ''}`}
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.4"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {link.dropdownLinks && (
                <div
                  className={`absolute left-0 top-full mt-1 z-50 bg-huly-dark border border-white/10 rounded-md shadow-lg overflow-hidden transition-all duration-200 ${
                    activeDropdown === link.key
                    ? 'opacity-100 max-h-[400px]'
                    : 'opacity-0 max-h-0 pointer-events-none'
                  } ${isMobile ? 'w-full' : 'w-64'}`}
                >
                  <div className="py-2">
                    {link.dropdownLinks.map((dropdownLink) => (
                      <Link
                        key={dropdownLink.href}
                        href={dropdownLink.href}
                        className="flex flex-col px-4 py-2 hover:bg-white/5 transition-colors duration-200"
                      >
                        <span className="text-13 text-white font-medium">{dropdownLink.label}</span>
                        {dropdownLink.subLabel && (
                          <span className="text-12 text-grey-60">{dropdownLink.subLabel}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
