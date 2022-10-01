import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

function ProgressBar({ progress }) {
  return (
    <>
      <CircularProgress value={progress} color='secondary' thickness={'10px'} size={'100px'}>
          <CircularProgressLabel>{progress}%</CircularProgressLabel>
      </CircularProgress>
    </>
  )
}

export default ProgressBar