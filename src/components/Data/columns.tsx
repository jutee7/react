import {ColumnsType} from "antd/es/table/interface";
import {DataType} from "./DataType.tsx";

export const columns: ColumnsType<DataType> = [
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
];