import { Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

function ProgressBar({ progress, size, color }) {
  return (
    <Box>
      <CircularProgress value={progress} color={color || 'secondary'} thickness={'10px'} size={size || '100px'} mb={4}>
          <CircularProgressLabel>{progress}%</CircularProgressLabel>
      </CircularProgress>
    </Box>
  )
}

export default ProgressBar