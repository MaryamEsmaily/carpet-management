import {
  Box,
  Grid,
  GridItem,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import Pagination from "components/Pagination";
import DeleteIcon from "components/icon/DeleteIcon";
import EditIcon from "components/icon/EditIcon";
import MoreIcon from "components/icon/MoreIcon";
import useToast from "hook/useToast";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UserIcon from "components/icon/UserIcon";
import PhoneIcon from "components/icon/PhoneIcon";
import RoleIcon from "components/icon/RoleIcon";
import UserNameIcon from "components/icon/UserNameIcon";
import {
  useDeleteEmployee,
  usePostAllEmployees,
  usePutEmployeeStatus,
} from "hook/api/useEmployeesApi";
import { postAllEmployeesData } from "data/postAllEmployeesData";
import KeyIcon from "components/icon/KeyIcon";
import ModalChangeEmployeePassword from "components/modal/ModalChangeEmployeePassword";
import ModalConfirmDelete from "components/modal/ModalConfirmDelete";
import useModal from "hook/useModal";

function AllEmployees({ filterSearch, status }) {
  //
  const { t } = useTranslation();
  //
  const { toggle, config } = useModal();
  const { toggle: toggleDelete, config: configDelete } = useModal();
  const [id, setId] = useState("");
  //
  const deleteEmployee = useDeleteEmployee();
  //
  const toast = useToast();
  // for pagination
  const pageNumberOptions = [
    { value: 8, label: "8" },
    { value: 16, label: "16" },
    { value: 32, label: "32" },
  ];

  const [pageSize, setPageSize] = useState(pageNumberOptions?.[0].value);
  const [pageNumber, setPageNumber] = useState(1);
  //
  const putEmployeeStatus = usePutEmployeeStatus();
  //
  // API
  // const { data: allEmployees, totalCount } = usePostAllEmployees({
  //   filterSearch: filterSearch || null,
  //   status,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(
  //   () => allEmployees?.content,
  //   [allEmployees?.content]
  // );
  //

  // MOCK DATA
  const data = React.useMemo(() => postAllEmployeesData?.Data?.content, []);

  const totalCount = postAllEmployeesData?.Data?.totalCount;
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

  return (
    <>
      <ModalChangeEmployeePassword config={config} id={id} />
      <ModalConfirmDelete config={configDelete} id={id} cb={deleteEmployee} />
      <Box fontSize="sm">
        <Grid mt={5} templateColumns="repeat(2,minmax(0,1fr))" gap={7}>
          {data?.map((employee) => (
            <GridItem key={employee.id} colSpan={{ base: 2, lg: 1 }}>
              <Grid
                templateColumns="repeat(7,minmax(0,1fr))"
                direction="row"
                borderRadius={14}
                bg="layout"
                p={4}
                gap={4}
              >
                <GridItem colSpan={{ base: 7, xl: 3 }}>
                  <Image
                    border="2px solid"
                    borderColor="#f2f2f24a"
                    src={employee.image}
                    objectFit="cover"
                    width="100%"
                    h={200}
                    borderRadius={14}
                  />
                </GridItem>
                <GridItem colSpan={{ base: 7, xl: 4 }}>
                  <Stack justifyContent="space-between">
                    <Box textAlign="end">
                      <Popover placement="left-start">
                        <PopoverTrigger>
                          <IconButton
                            icon={<MoreIcon boxSize={5} />}
                            variant="unstyled"
                          />
                        </PopoverTrigger>
                        <PopoverContent
                          sx={{ width: "140px", borderRadius: "8px", p: 4 }}
                        >
                          <PopoverArrow />
                          <Stack spacing={4}>
                            <Radio
                              size="lg"
                              isChecked={employee.status === "0"}
                              onClick={() =>
                                handleStatus({
                                  id: employee?.id,
                                  status: employee?.status === "0" ? "1" : "0",
                                })
                              }
                            >
                              <Text fontSize="sm" mx={1}>
                                {/* غیـرفعـال */}
                                {t("13")}
                              </Text>
                            </Radio>
                            <Stack
                              cursor="pointer"
                              direction="row"
                              align="center"
                              spacing={3}
                              onClick={() => {
                                toggle();
                                setId(employee.id);
                              }}
                            >
                              <KeyIcon color="green" boxSize={5} />
                              <Text fontSize="sm">تغییر رمزعبور</Text>
                            </Stack>
                            <Link to={`employee-edit/${employee.id}`}>
                              <Stack
                                cursor="pointer"
                                direction="row"
                                align="center"
                                spacing={3}
                              >
                                <EditIcon boxSize={5} />
                                <Text>
                                  {/* ویرایش */}
                                  {t("20")}
                                </Text>
                              </Stack>
                            </Link>
                            <Stack
                              cursor="pointer"
                              direction="row"
                              align="center"
                              spacing={3}
                              onClick={() => {
                                toggleDelete();
                                setId(employee.id);
                              }}
                            >
                              <DeleteIcon fill="none" color="red" boxSize={6} />
                              <Text>
                                {/* حذف */}
                                {t("21")}
                              </Text>
                            </Stack>
                          </Stack>
                        </PopoverContent>
                      </Popover>
                    </Box>
                    <Link to={`employee-details/${employee.id}`}>
                      <Stack spacing={4}>
                        <Stack direction="row" align="center" spacing={2}>
                          <UserIcon color="text-primary" boxSize={5} />
                          <Text color="text-primary">
                            نـام و نـام خـانوادگی :
                          </Text>
                          <Text noOfLines={1}>{employee.fullName}</Text>
                        </Stack>
                        <Stack direction="row" align="center" spacing={2}>
                          <PhoneIcon
                            color="text-primary"
                            fill="none"
                            boxSize={5}
                          />
                          <Text color="text-primary">شمـاره همـراه :</Text>
                          <Text>{employee.mobileNumber}</Text>
                        </Stack>
                        <Stack direction="row" align="center" spacing={2}>
                          <UserNameIcon color="text-primary" boxSize={5} />
                          <Text color="text-primary">نـام کـاربری :</Text>
                          <Text>{employee.userName}</Text>
                        </Stack>
                        <Stack direction="row" align="center" spacing={2}>
                          <RoleIcon color="text-primary" boxSize={5} />
                          <Text color="text-primary">نقش :</Text>
                          <Text>{employee.role}</Text>
                        </Stack>
                      </Stack>
                    </Link>
                  </Stack>
                </GridItem>
              </Grid>
            </GridItem>
          ))}
        </Grid>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pageSize={pageSize}
          setPageSize={setPageSize}
          totalCount={totalCount}
          pageNumberOptions={pageNumberOptions}
        />
      </Box>
    </>
  );
}

export default AllEmployees;
