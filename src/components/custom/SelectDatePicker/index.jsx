import { Stack, Text, useColorModeValue, useTheme } from "@chakra-ui/react";
import { months } from "constant/months";
import { jalaaliMonthLength, toJalaali } from "jalaali-js";
import moment from "jalali-moment";
import React, { useEffect, useMemo, useState } from "react";
import ReactSelect from "react-select";

const style = ({ menuPortalBg, InputBg, direction }) => ({
  container: (base) => ({
    ...base,
    flexGrow: 1,
  }),
  control: (base) => ({
    ...base,
    height: 50,
    minHeight: 50,
    borderRadius: "8px",
    backgroundColor: InputBg,
    borderColor: InputBg,
    width: "100%",
    overflowX: "auto",
    textAlign: "center",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    display: "none",
  }),
  menuPortal: (provided) => {
    return {
      ...provided,
      [direction === "ltr" ? "left" : "right"]: provided.left,
      [direction === "ltr" ? "right" : "left"]: "unset",
      zIndex: 3,
    };
  },
  menu: (base) => ({
    ...base,
    backgroundColor: menuPortalBg,
  }),
  input: (base) => ({
    ...base,
    color: "primary-text",
  }),
  singleValue: (base) => ({
    ...base,
    color: "primary-text",
  }),
});

function SelectDatePicker({ name, value, onChange }) {
  //
  const menuPortalBg = useColorModeValue("#fff", "#2a2e37");
  const InputBg = useColorModeValue("#edf2f7", "#2a2e37");
  const menuBg = useColorModeValue("#6a82dd6b", "#000");
  //
  const { direction } = useTheme();
  //
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [day, setDay] = useState("");
  //
  const yearList = useMemo(() => {
    const year = [];
    const currentYear = toJalaali(new Date()).jy;
    for (let index = currentYear; index >= currentYear - 100; index--) {
      year.push({ value: index, label: index });
    }
    return year;
  }, []);
  //
  const dayList = useMemo(() => {
    const day = [];
    const currentDay = jalaaliMonthLength(year, month);
    for (let index = 1; index <= currentDay; index++) {
      day.push({ value: index, label: index });
    }
    return day;
  }, [month, year]);
  //
  useEffect(() => {
    if (onChange && day && month && year)
      onChange({
        target: {
          value: moment(
            `${year.value}/${month.value}/${day.value}`,
            "jYYYY-jMM-jDD"
          ).format("YYYY-MM-DDT00:00:00.000Z"),
          name,
        },
      });
  }, [day, month, name, onChange, year]);
  //
  useEffect(() => {
    if (value) {
      const date = moment(value, "YYYYMMDD")
        .locale("fa")
        .format("YYYY/MM/DD")
        ?.split("/");
      setDay({
        value: +date?.[2],
        label: +date?.[2],
      });
      setYear({
        value: +date?.[0],
        label: +date?.[0],
      });
      setMonth({
        value: +date?.[1],
        label: months.find((item) => +item.value === +date?.[1])?.label,
      });
    }
  }, [value]);
  //
  return (
    <Stack direction="row" align="center">
      <ReactSelect
        styles={style({ menuPortalBg, InputBg, direction })}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: menuBg,
          },
        })}
        placeholder="روز"
        options={dayList}
        value={day}
        onChange={(e) => setDay(e)}
        isDisabled={!month || !year}
      />
      <Text>/</Text>
      <ReactSelect
        styles={style({ menuPortalBg, InputBg, direction })}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: menuBg,
          },
        })}
        placeholder="ماه"
        options={months}
        value={month}
        onChange={(e) => setMonth(e)}
      />
      <Text>/</Text>
      <ReactSelect
        styles={style({ menuPortalBg, InputBg, direction })}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: menuBg,
          },
        })}
        placeholder="سال"
        options={yearList}
        value={year}
        onChange={(e) => setYear(e)}
      />
    </Stack>
  );
}

export default SelectDatePicker;
