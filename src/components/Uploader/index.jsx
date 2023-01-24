import React, { useRef } from "react";
import useToast from "hook/useToast";
import { usePostIoUploads } from "hook/api/useApiIo";
import {
  Box,
  FormControl,
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import UploadIcon from "components/icon/UploadIcon";
import getFileSource from "utils/getFileSource";
//
function Uploader({ multiple, onChange, name, value }) {
  //
  const InputBg = useColorModeValue("#edf2f7", "#2a2e37");
  //
  const inputFileRef = useRef();
  const { mutate } = usePostIoUploads();
  const toast = useToast();
  //
  const handleChangeInputFile = (e) => {
    const files = Array.prototype.slice.call(e.target.files);
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    mutate(formData, {
      onSuccess: (res) => {
        if (res.fileName)
          onChange({
            target: {
              value: res.fileName,
              name,
            },
          });
      },
      onError: (err) => {
        toast.error({ err });
      },
    });
  };
  //
  const handleAddInputFile = (e) => {
    const newFiles = Array.prototype.slice.call(e.target.files);
    const formData = new FormData();
    newFiles.forEach((file) => {
      formData.append("files", file);
    });
    mutate(formData, {
      onSuccess: (res) => {
        if (res.fileName)
          onChange({
            target: {
              value: [...value, ...res.fileName],
              name,
            },
          });
      },
      onError: (err) => {
        toast.error({ err });
      },
    });
  };
  //
  const haveFiles = Boolean(value.length);
  //
  return (
    <FormControl>
      {haveFiles ? (
        <>
          <Box>
            {multiple ? (
              <>
                <input
                  ref={inputFileRef}
                  style={{ display: "none" }}
                  type="file"
                  multiple={multiple}
                  onChange={handleAddInputFile}
                />
                <Box
                  p={4}
                  bg={InputBg}
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="md"
                  onClick={() => inputFileRef.current.click()}
                  cursor="pointer"
                >
                  <UploadIcon color="blue.400" boxSize={110} />
                  <Text fontSize={18} fontWeight="bold" color="text-primary">
                    پیوست فـایـل
                  </Text>
                </Box>
              </>
            ) : null}
          </Box>
          <Grid templateColumns="repeat(5,minmax(0,1fr))" gap={2} mt={4}>
            {value.map((file) => (
              <GridItem colSpan={1} key={file}>
                <Image
                  borderRadius="lg"
                  // src={getFileSource(file)}
                  src={file}
                  width="80px"
                  height="80px"
                  objectFit="cover"
                />
              </GridItem>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <input
            ref={inputFileRef}
            style={{ display: "none" }}
            type="file"
            multiple={multiple}
            onChange={handleChangeInputFile}
          />
          <Box
            p={4}
            bg={InputBg}
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="md"
            onClick={() => inputFileRef.current.click()}
            cursor="pointer"
          >
            <UploadIcon color="blue.400" boxSize={110} />
            <Text fontSize={18} fontWeight="bold" color="text-primary">
              پیوست فـایـل
            </Text>
          </Box>
        </>
      )}
    </FormControl>
  );
}

Uploader.defaultProps = {
  value: [],
  name: "",
  onChange: () => {},
  fullWidth: true,
  multiple: false,
  label: "",
};

export default Uploader;
