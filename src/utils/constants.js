export const COMPANY_INFO = {
  name: 'S&M Construction',
  founded: '2000',
  phone: '+1 234 567 8900',
  email: 'info@smconstruction.com',
  address: {
    street: '123 Construction Avenue',
    city: 'Business District',
    country: 'United States'
  },
  workingHours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 1:00 PM',
    sunday: 'Closed'
  }
};

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/sm-construction',
  twitter: 'https://twitter.com/smconstruction',
  facebook: 'https://facebook.com/smconstruction',
  instagram: 'https://instagram.com/smconstruction'
};

export const NAV_ITEMS = {
  corporate: [
    { title: 'About Us', path: '/about' },
    { title: 'Management', path: '/management' },
    { title: 'Vision & Mission', path: '/vision' },
    { title: 'Quality Policy', path: '/quality' }
  ],
  projects: [
    { title: 'Ongoing Projects', path: '/projects/ongoing' },
    { title: 'Completed Projects', path: '/projects/completed' },
    { title: 'Real Estate Projects', path: '/projects/real-estate' }
  ],
  sectors: [
    { title: 'Construction', path: '/sectors/construction' },
    { title: 'Energy', path: '/sectors/energy' },
    { title: 'Infrastructure', path: '/sectors/infrastructure' }
  ]
}; 