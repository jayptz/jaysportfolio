'use client'

const socialLinks = [
  {
    name: 'X (Twitter)',
    icon: 'fab fa-x-twitter',
    url: 'https://x.com/jayptz0', 
    color: 'hover:text-gray-300'
  },
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/jayptz', 
    color: 'hover:text-gray-300'
  },
  {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin',
    url: 'https://www.linkedin.com/in/jay-patel-wlu/', 
    color: 'hover:text-blue-300',
  },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:jay21pt2005@gmail.com', 
      color: 'hover:text-yellow-400'
    }
]

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center py-4 px-4">
      <div className="flex gap-4 justify-center">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${social.color} transition-colors duration-200 text-xl`}
            aria-label={social.name}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </div>
  )
}