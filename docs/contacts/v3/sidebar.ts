import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "contacts/v3/contacts",
    },
    {
      type: "category",
      label: "Batch",
      link: {
        type: "doc",
        id: "contacts/v3/batch",
      },
      items: [
        {
          type: "doc",
          id: "contacts/v3/post-crm-v-3-objects-contacts-batch-read-read",
          label: "Read a batch of contacts by internal ID, or unique property values",
          className: "menu__list-item--deprecated api-method post",
        },
        {
          type: "doc",
          id: "contacts/v3/post-crm-v-3-objects-contacts-batch-archive-archive",
          label: "Archive a batch of contacts by ID",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "contacts/v3/post-crm-v-3-objects-contacts-batch-create-create",
          label: "Create a batch of contacts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "contacts/v3/post-crm-v-3-objects-contacts-batch-update-update",
          label: "Update a batch of contacts by internal ID, or unique property values",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "contacts/v3/post-crm-v-3-objects-contacts-batch-upsert-upsert",
          label: "Create or update a batch of contacts by unique property values",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Basic",
      link: {
        type: "doc",
        id: "contacts/v3/basic",
      },
      items: [
        {
          type: "doc",
          id: "contacts/v3/get-crm-v-3-objects-contacts-contact-id-get-by-id",
          label: "Read",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "contacts/v3/delete-crm-v-3-objects-contacts-contact-id-archive",
          label: "Archive",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "contacts/v3/patch-crm-v-3-objects-contacts-contact-id-update",
          label: "Update",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "contacts/v3/get-crm-v-3-objects-contacts-get-page",
          label: "List",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "contacts/v3/post-crm-v-3-objects-contacts-create",
          label: "Create",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Merge",
      link: {
        type: "doc",
        id: "contacts/v3/merge",
      },
      items: [
        {
          type: "doc",
          id: "contacts/v3/post-crm-v-3-objects-contacts-merge-merge",
          label: "Merge two contacts with same type",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "GDPR",
      link: {
        type: "doc",
        id: "contacts/v3/gdpr",
      },
      items: [
        {
          type: "doc",
          id: "contacts/v3/post-crm-v-3-objects-contacts-gdpr-delete-purge",
          label: "GDPR DELETE",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Search",
      link: {
        type: "doc",
        id: "contacts/v3/search",
      },
      items: [
        {
          type: "doc",
          id: "contacts/v3/post-crm-v-3-objects-contacts-search-do-search",
          label: "post-/crm/v3/objects/contacts/search_doSearch",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
