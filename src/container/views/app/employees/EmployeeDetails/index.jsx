import React from "react";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Text,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Radio,
  Image,
} from "@chakra-ui/react";
import CalenderIcon from "components/icon/CalenderIcon";
import MoreBorderedIcon from "components/icon/MoreBorderedIcon";
import UserIcon from "components/icon/UserIcon";
import { postEmployeeDetailsData } from "data/postEmployeeDetailsData";
import AccountIcon from "components/icon/AccountIcon";
import EmailIcon from "components/icon/EmailIcon";
import LocationFillIcon from "components/icon/LocationFillIcon";
import {
  useDeleteEmployee,
  usePostEmployeeDetails,
  usePutEmployeeStatus,
} from "hook/api/useEmployeesApi";
import useToast from "hook/useToast";
import { Link, useParams } from "react-router-dom";
import PhoneIcon from "components/icon/PhoneIcon";
import RoleIcon from "components/icon/RoleIcon";
import EditIcon from "components/icon/EditIcon";
import DeleteIcon from "components/icon/DeleteIcon";
import KeyIcon from "components/icon/KeyIcon";
import ModalChangeEmployeePassword from "components/modal/ModalChangeEmployeePassword";
import ModalConfirmDelete from "components/modal/ModalConfirmDelete";
import useModal from "hook/useModal";

function EmployeeDetails() {
  //
  const toast = useToast();
  //
  const { toggle, config } = useModal();
  const { toggle: toggleDelete, config: configDelete } = useModal();
  //
  const deleteEmployee = useDeleteEmployee();
  const putEmployeeStatus = usePutEmployeeStatus();
  //
  // API
  // const { id } = useParams();
  // const { data: employeeDetails } = usePostEmployeeDetails({ id });
  // //
  // const data = React.useMemo(() => {
  //   return employeeDetails?.content;
  // }, [employeeDetails?.content]);
  //
  // MOCK DATA
  const data = React.useMemo(() => {
    return postEmployeeDetailsData?.Data?.content;
  }, []);
  //
  const handleStatus = ({ id, status }) => {
    putEmployeeStatus.mutate(
      {
        id,
        status,
      },
      {
        onSuccess: (res) => {
          toast.success({ res });
        },
        onError: (err) => {
          toast.error({ err });
        },
      }
    );
  };
  //
  return (
    <>
      <ModalChangeEmployeePassword config={config} id="1" />
      <ModalConfirmDelete config={configDelete} id="1" cb={deleteEmployee} />
      <Box mt={8}>
        <Grid
          templateColumns="repeat(13,minmax(0,1fr))"
          borderRadius={24}
          bg="layout"
          gap={14}
          p={5}
        >
          <GridItem colSpan={6}>
            <Image
              src={data?.image}
              border="4px solid"
              borderColor="#f2f2f28d"
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius={18}
            />
          </GridItem>
          <GridItem colSpan={7}>
            <Stack direction="row" justify="space-between" align="center">
              <Text fontSize={24}>{data?.fullName}</Text>
              <Popover placement="left-start">
                <PopoverTrigger>
                  <PopoverTrigger>
                    <Stack direction="row" justifyContent="space-between">
                      <IconButton
                        icon={<MoreBorderedIcon fill="none" boxSize={5} />}
                        variant="unstyled"
                      />
                    </Stack>
                  </PopoverTrigger>
                </PopoverTrigger>
                <PopoverContent
                  sx={{ width: "140px", borderRadius: "8px", p: 4 }}
                >
                  <PopoverArrow />
                  <Stack spacing={4}>
                    <Radio
                      size="lg"
                      isChecked={data?.status === "1"}
                      onClick={() =>
                        handleStatus({
                          id: data?.id,
                          status: data?.status === "0" ? "1" : "0",
                        })
                      }
                    >
                      <Text fontSize="sm">فعـال</Text>
                    </Radio>
                    <Stack
                      cursor="pointer"
                      direction="row"
                      align="center"
                      spacing={3}
                      onClick={toggle}
                    >
                      <KeyIcon color="green" boxSize={5} />
                      <Text fontSize="sm">تغییر رمزعبور</Text>
                    </Stack>
                    <Link to={`/app/employees/employee-edit/${1}`}>
                      <Stack
                        cursor="pointer"
                        direction="row"
                        align="center"
                        spacing={3}
                      >
                        <EditIcon boxSize={5} />
                        <Text fontSize="sm">ویرایش</Text>
                      </Stack>
                    </Link>
                    <Stack
                      cursor="pointer"
                      direction="row"
                      align="center"
                      spacing={3}
                      onClick={toggleDelete}
                    >
                      <DeleteIcon fill="none" color="red" boxSize={6} />
                      <Text fontSize="sm">حذف</Text>
                    </Stack>
                  </Stack>
                </PopoverContent>
              </Popover>
            </Stack>

            <Divider variant="dashed" my={5} />
            <Stack spacing={8} mt={8}>
              <Stack direction="row">
                <Stack direction="row" align="center" spacing={3} width={220}>
                  <PhoneIcon color="text-primary" fill="none" boxSize={5} />
                  <Text fontWeight="bold" color="text-primary">
                    شمـاره همـراه :
                  </Text>
                </Stack>
                <Text>{data?.mobileNumber}</Text>
              </Stack>
              <Stack direction="row">
                <Stack direction="row" align="center" spacing={3} width={220}>
                  <AccountIcon color="text-primary" boxSize={5} />
                  <Text fontWeight="bold" color="text-primary">
                    نـام کـاربری :
                  </Text>
                </Stack>
                <Text>{data?.userName}</Text>
              </Stack>
              <Stack direction="row">
                <Stack direction="row" align="center" spacing={3} width={220}>
                  <CalenderIcon color="text-primary" boxSize={5} />
                  <Text fontWeight="bold" color="text-primary">
                    تاریخ تولـد :
                  </Text>
                </Stack>
                <Text>{data?.birthDate}</Text>
              </Stack>
              <Stack direction="row" align="start">
                <Stack
                  direction="row"
                  align="center"
                  whiteSpace="nowrap"
                  spacing={3}
                  width={220}
                >
                  <EmailIcon fill="none" color="text-primary" boxSize={5} />
                  <Text fontWeight="bold" color="text-primary">
                    پست الکترونیـک :
                  </Text>
                </Stack>
                <Text>{data?.email}</Text>
              </Stack>
              <Stack direction="row" align="start">
                <Stack
                  direction="row"
                  align="center"
                  whiteSpace="nowrap"
                  spacing={3}
                  width={220}
                >
                  <PhoneIcon fill="none" color="text-primary" boxSize={5} />
                  <Text fontWeight="bold" color="text-primary">
                    تلفـن :
                  </Text>
                </Stack>
                <Text>{data?.phone}</Text>
              </Stack>
              <Stack direction="row" align="start">
                <Stack
                  direction="row"
                  align="center"
                  whiteSpace="nowrap"
                  spacing={3}
                  width={220}
                >
                  <LocationFillIcon
                    fill="none"
                    color="text-primary"
                    boxSize={5}
                  />
                  <Text fontWeight="bold" color="text-primary">
                    آدرس :
                  </Text>
                </Stack>
                <Text>{data?.address}</Text>
              </Stack>
              <Stack direction="row" align="start">
                <Stack
                  direction="row"
                  align="center"
                  whiteSpace="nowrap"
                  spacing={3}
                  width={220}
                >
                  <RoleIcon fill="none" color="text-primary" boxSize={5} />
                  <Text fontWeight="bold" color="text-primary">
                    نقـش :
                  </Text>
                </Stack>
                <Text>{data?.role}</Text>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
        <Divider variant="dashed" my={5} />
        {/* info */}
        <Flex justifyContent="space-between">
          <Stack direction="row" spacing={5}>
            <Stack direction="row" align="center" spacing={1}>
              <UserIcon color="text-primary" boxSize={5} />
              <Text color="text-primary">ساخته شده توسط :</Text>
              <Text>{data?.author}</Text>
            </Stack>
            <Stack direction="row" align="center" spacing={1}>
              <CalenderIcon color="text-primary" boxSize={5} />
              <Text color="text-primary">در تـاریخ :</Text>
              <Text>{data?.createData}</Text>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={5}>
            <Stack direction="row" align="center" spacing={1}>
              <UserIcon color="text-primary" boxSize={5} />
              <Text color="text-primary">آخرین تغییـر توسط :</Text>
              <Text dir="ltr">{data?.changeByAuthor}</Text>
            </Stack>
            <Stack direction="row" align="center" spacing={1}>
              <CalenderIcon color="text-primary" boxSize={5} />
              <Text color="text-primary">در تـاریخ :</Text>
              <Text dir="ltr">{data?.lastChangeDate}</Text>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default EmployeeDetails;
