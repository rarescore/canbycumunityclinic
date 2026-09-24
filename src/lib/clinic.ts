export const clinic = {
  name: "Canby Community Clinic",
  former: "Pura Vida Community Clinic",
  phoneDisplay: "(818) 674-4414",
  phoneTel: "+18186744414",
  emailPatients: "Info@canbycc.org",
  emailOffice: "office@canbycc.org",
  street: "7601 Canby Ave #6B",
  city: "Reseda, CA 91335",
  npi: "1518686377",
  ein: "87-1610266",
  hcaiId: "306190044",
  mapsUrl:
    "https://maps.google.com/?q=7601+Canby+Ave+%236B,+Reseda,+CA+91335",
  mapsEmbed:
    "https://maps.google.com/maps?q=7601+Canby+Ave+6B,+Reseda,+CA+91335&z=16&output=embed",
  npiUrl: "https://npiregistry.cms.hhs.gov/provider-view/1518686377",
  hcaiUrl: "https://hcai.ca.gov/facility/pura-vida-community-clinic/",
  nonprofitUrl: "https://projects.propublica.org/nonprofits/organizations/871610266",
} as const;

export const weekdayKeys = ["mon", "tue", "wed", "thu", "fri"] as const;
export type Weekday = (typeof weekdayKeys)[number];
