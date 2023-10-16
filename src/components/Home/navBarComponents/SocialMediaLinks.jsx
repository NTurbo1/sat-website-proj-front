import React from 'react'
import socialMediaLinks from '../../../utils/socialMediaLinks'
import InstagramIcon from '/images/social-media/instagram-icon.png'
import FacebookIcon from '/images/social-media/facebook-icon.png'
import WhatsappIcon from '/images/social-media/whatsapp-icon.png'
import EmailIcon from '/images/social-media/gmail-icon.png'
import YoutubeIcon from '/images/social-media/youtube-icon.png'

const SocialMediaLinks = () => {

  const iconClassName = 'w-6 h-6'

  return (
    <div className='flex gap-4'>
      <a href={socialMediaLinks.instagram} target='_blank'>
        <img src={InstagramIcon} alt='instagram'
          className={iconClassName}
        />
      </a>
      <a href={socialMediaLinks.facebook} target='_blank'>
        <img src={FacebookIcon} alt='facebook'
          className={iconClassName}
        />
      </a>
      <a href={socialMediaLinks.whatsapp} target='_blank'>
        <img src={WhatsappIcon} alt='whatsapp'
          className={iconClassName}
        />
      </a>
      <a href={socialMediaLinks.email} target='_blank'>
        <img src={EmailIcon} alt='email'
          className={iconClassName}
        />
      </a>
      <a href={socialMediaLinks.youtube} target='_blank'>
        <img src={YoutubeIcon} alt='youtube'
          className={iconClassName}
        />
      </a>
    </div>
  )
}

export default SocialMediaLinks