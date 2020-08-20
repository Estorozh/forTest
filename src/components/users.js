import React from 'react'
import {List, Datagrid, TextField, EmailField, UrlField} from 'react-admin'
import {UserFilter} from '@c/Filter/Filter'

export const UserList = props => (
    <List {...props} filters={<UserFilter />}> 
        <Datagrid rowClick='edit' >
            <TextField source="id" />
            <TextField source="name" sortable={false}/>
            <TextField source="username"  sortable={false}/>
            <EmailField source="email"  sortable={false}/>
            <TextField source="address.street" label='Address'  sortable={false}/>
            <TextField source="phone"  sortable={false}/>
            <UrlField source="website"  sortable={false}/>
            <TextField source="company.name" label="Company"  sortable={false} />
        </Datagrid>
    </List>
);