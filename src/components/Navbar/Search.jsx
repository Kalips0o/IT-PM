import React from 'react';
import { Input, Space } from 'antd';
import style from './Search.module.css';

const { Search } = Input;

const onSearch = (value) => console.log(value);

function SearchBlock() {
    return (
        <Space
            className={style.space}
        >
            <Search
                className={style.search}
                placeholder="Поиск"
                onSearch={onSearch}
            />

        </Space>
    );
}

export default SearchBlock;
