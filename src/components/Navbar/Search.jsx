import React from 'react';
import { Input, Space } from 'antd';
import style from './Search.module.css';

const { Search } = Input;

const onSearch = (value) => console.log(value);

function SearchBlock() {
    return (
        <Space
            className={style.search}
        >
            <Search
                placeholder="Поиск"
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
            />

        </Space>
    );
}

export default SearchBlock;
