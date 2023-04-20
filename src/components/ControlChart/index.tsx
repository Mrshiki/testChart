import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {ControlChartType} from "./ControlChartType";

const ControlChart = ({chartType, setChartType}: ControlChartType) => {
    return (
        <FormControl fullWidth={true}>
            <InputLabel id="demo-simple-select-label">
                Type Chart
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type Chart"
                value={chartType}
                onChange={(e) => setChartType(e.target.value)}
            >
                <MenuItem value={"column"}>Column</MenuItem>
                <MenuItem value={"bar"}>Bar</MenuItem>
            </Select>
        </FormControl>
    );
};

export default ControlChart;
