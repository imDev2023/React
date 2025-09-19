import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-3xl mx-auto font-sans'>
        <div className='flex flex-row gap-10 justify-center'>
            <img src="https://static.wixstatic.com/media/1f3f2b_f59a557a4c72456581fa206a9247dcac~mv2.png/v1/fill/w_170,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/twtttt.png" 
            alt="footer" className='h-12 my-auto'
            />
            <img src="https://static.wixstatic.com/media/1f3f2b_e78823e3b50f4f76963293a9ab1e19c3~mv2.png/v1/fill/w_422,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pepetitle.png" 
            alt="footer" className='h-12 my-auto'
            />

        </div>
        <p className='leading-10 text-center'>
        $pepe coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.
        </p>
        <br />
        <p className='leading-10 text-center'>$PEPE is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.</p>
    </div>
  )
}

export default Footer