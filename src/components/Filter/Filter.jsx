import React from 'react'
import { ReferenceInput, AutocompleteInput, Filter, TextInput } from 'react-admin';

export const UserFilter = (props) => (<>
  <Filter {...props} >
    <ReferenceInput label='Username' source='id' reference='users' alwaysOn  >
      <AutocompleteInput optionText='username' source='q' />
    </ReferenceInput>
  </Filter>
  </>
)