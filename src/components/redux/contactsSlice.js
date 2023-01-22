import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contactList from '../../data/contacts.json';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetch(
        'https://637399000bb6b698b610aaa8.mockapi.io/contacts'
      );
      const contacts = await data.json();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (newObj, { rejectWithValue }) => {
    try {
      const data = await fetch(
        'https://637399000bb6b698b610aaa8.mockapi.io/contacts',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: JSON.stringify(newObj),
        }
      );
      const res = await data.json();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetch(
        `https://637399000bb6b698b610aaa8.mockapi.io/contacts/${id}`,
        {
          method: 'DELETE',
        }
      );
      const res = await data.json();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: contactList,
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    deleteContact(state, { payload }) {
      state.contacts.items = [...payload];
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.items = payload;
    });
    builder.addCase(fetchContacts.rejected, (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    });
    builder.addCase(addContacts.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(addContacts.fulfilled, (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.items = [...state.contacts.items, payload];
    });
    builder.addCase(addContacts.rejected, (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    });
    builder.addCase(removeContact.pending, state => {
      state.contacts.isLoading = true;
    });
    builder.addCase(removeContact.fulfilled, (state, { payload }) => {
      state.contacts.isLoading = false;
    });
    builder.addCase(removeContact.rejected, (state, { payload }) => {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    });
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

//Selectors
export const getContacts = ({ contacts }) => contacts.contacts.items;
export const getFilter = ({ contacts }) => contacts.filter;
