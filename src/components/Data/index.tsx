import { Button, Table } from "antd"

import axios from "axios";
import { useEffect, useState } from "react";
import { DataType } from "./DataType";
import { columns } from "./columns";


const Data = () => {

    const [page, setPage] = useState<number>(1);

    const [dataSource, setDataSource] =useState<DataType[]>();

    const LIMIT_LIST_SCHOOL: number = 10;

    useEffect(() => {
        getUniversity(page, LIMIT_LIST_SCHOOL);
    }, [page, LIMIT_LIST_SCHOOL]);

    const offset = LIMIT_LIST_SCHOOL * page - LIMIT_LIST_SCHOOL

    const getUniversity = async (page: number, limit: number) => {
    const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`)
    setDataSource(response.data);    
}

    return (
        <>
            <Table dataSource={dataSource} columns={columns} pagination={false}/>
            <Button onClick={() => setPage(page - 1)} disabled={page < 2}>Previous</Button>
            <Button onClick={() => setPage(page + 1)}>Next</Button>
        </>
    )
};

export default Data;