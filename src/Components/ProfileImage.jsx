import React from 'react'
import { Image } from 'react-bootstrap'

const ProfileImage = ({SRC, HEIGHT}) => {
  return (
    <>
        <Image src={SRC} alt="" height={HEIGHT} />
    </>
  )
}

export default ProfileImage