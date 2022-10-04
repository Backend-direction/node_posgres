import React, { useRef, useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';

export const FormInputImage = ({ name }) => {
  const { control } = useFormContext();
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  const imageElement = useRef();

 const showImage = (e) => {
  if (!e.target.files || e.target.files.length === 0) {
    setSelectedFile(undefined)
    return
  }

  setSelectedFile(e.target.files[0])
 }

 useEffect(() => {
  if (!selectedFile) {
      setPreview(undefined)
      return
  }

  const objectUrl = URL.createObjectURL(selectedFile)
  setPreview(objectUrl)

  // free memory when ever this component is unmounted
  return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <Box sx={{ position: 'relative', minHeight: '220px'}}>
        <img
          ref={imageElement} 
          src={preview}
          alt="screen"
          style={{ width: "390px"}} 
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{ position: 'absolute', bottom: '10px', right: '10px'}}
        >
          <input 
            hidden 
            accept="image/*"
            type="file"
            onChange={(e) => {
              showImage(e);
              onChange(e.target.files[0]);
            }}
          />
          <PhotoCamera sx={{ fill: '#1976d2 !important'}}/>
        </IconButton>
      </Box>
      )}
    />
  );
};