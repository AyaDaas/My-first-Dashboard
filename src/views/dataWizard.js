const data = [
    {
        "onboarding_name": "Data Cleanse Onboarding",
        "onboarding_id": "1",
        "forms": [
            {
                "id": "1",
                "name": "Terms and Condition",
                "active": "1",
                "form_order": "1",
                "visible": "0",
                "required": "0",
                "message": "",
                "after_check": null,
                "fields": [
                    {
                        "id": "1",
                        "form_id": "1",
                        "active": "1",
                        "name": "Terms and Conditions",
                        "type": "downloadfile",
                        "field_order": "1",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "path": ""
                    },
                    {
                        "id": "2",
                        "form_id": "1",
                        "active": "1",
                        "name": "Code of Conduct (COE)",
                        "type": "downloadfile",
                        "field_order": "2",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "path": ""
                    },
                    {
                        "id": "3",
                        "form_id": "1",
                        "active": "1",
                        "name": "Terms and Conditions Acceptance:",
                        "type": "radio",
                        "field_order": "3",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "options": [
                            {
                                "id": "1",
                                "option_value": "I accept the Terms and Conditionsand Code of Conduct",
                                "field_id": "3",
                                "display_when": ""
                            },
                            {
                                "id": "2",
                                "option_value": "I Dont Accept the Terms and Conditions and Code of Conduct",
                                "field_id": "3",
                                "display_when": ""
                            }
                        ]
                    }
                ]
            },
            {
                "id": "2",
                "name": "Company Information",
                "active": "1",
                "form_order": "2",
                "visible": "0",
                "required": "0",
                "message": "You are required to fill this information",
                "after_check": null,
                "fields": [
                    {
                        "id": "4",
                        "form_id": "2",
                        "active": "1",
                        "name": "Legal Company Name",
                        "type": "input",
                        "field_order": "2",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "5",
                        "form_id": "2",
                        "active": "1",
                        "name": "Company DBA Name",
                        "type": "input",
                        "field_order": "3",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "6",
                        "form_id": "2",
                        "active": "1",
                        "name": "Address 1",
                        "type": "input",
                        "field_order": "4",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "7",
                        "form_id": "2",
                        "active": "1",
                        "name": "Address 2",
                        "type": "input",
                        "field_order": "5",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "8",
                        "form_id": "2",
                        "active": "1",
                        "name": "Address 3",
                        "type": "input",
                        "field_order": "6",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "9",
                        "form_id": "2",
                        "active": "1",
                        "name": "Address 4",
                        "type": "input",
                        "field_order": "7",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "10",
                        "form_id": "2",
                        "active": "1",
                        "name": "Country",
                        "type": "select",
                        "field_order": "8",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "is_paren_for": "11",
                        "options": [
                            {
                                "id": "3",
                                "option_value": "US",
                                "field_id": "10",
                                "display_when": ""
                            },
                            {
                                "id": "4",
                                "option_value": "CA",
                                "field_id": "10",
                                "display_when": ""
                            }
                        ]
                    },
                    {
                        "id": "11",
                        "form_id": "2",
                        "active": "1",
                        "name": " State/Province",
                        "type": "select",
                        "field_order": "9",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "is_child_for": "10",
                        "options": [
                            {
                                "id": "5",
                                "option_value": "Colorado",
                                "field_id": "11",
                                "display_when": "US"
                            },
                            {
                                "id": "6",
                                "option_value": "Florida",
                                "field_id": "11",
                                "display_when": "US"
                            },
                            {
                                "id": "7",
                                "option_value": "Nebraska",
                                "field_id": "11",
                                "display_when": "US"
                            },
                            {
                                "id": "8",
                                "option_value": "Massachusetts",
                                "field_id": "11",
                                "display_when": "US"
                            },
                            {
                                "id": "9",
                                "option_value": "Alberta",
                                "field_id": "11",
                                "display_when": "CA"
                            },
                            {
                                "id": "10",
                                "option_value": "BritishColumbia",
                                "field_id": "11",
                                "display_when": "CA"
                            },
                            {
                                "id": "11",
                                "option_value": "Manitoba",
                                "field_id": "11",
                                "display_when": "CA"
                            }
                        ]
                    },
                    {
                        "id": "12",
                        "form_id": "2",
                        "active": "1",
                        "name": "City",
                        "type": "input",
                        "field_order": "10",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "13",
                        "form_id": "2",
                        "active": "1",
                        "name": "County",
                        "type": "input",
                        "field_order": "11",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "14",
                        "form_id": "2",
                        "active": "1",
                        "name": "Postal Code",
                        "type": "input",
                        "field_order": "12",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "15",
                        "form_id": "2",
                        "active": "1",
                        "name": "Website URL",
                        "type": "input",
                        "field_order": "13",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "16",
                        "form_id": "2",
                        "active": "1",
                        "name": "First Name",
                        "type": "input",
                        "field_order": "15",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "17",
                        "form_id": "2",
                        "active": "1",
                        "name": "Last Name",
                        "type": "input",
                        "field_order": "16",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "18",
                        "form_id": "2",
                        "active": "1",
                        "name": "Email",
                        "type": "input",
                        "field_order": "17",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "19",
                        "form_id": "2",
                        "active": "1",
                        "name": "Phone ",
                        "type": "number",
                        "field_order": "18",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "20",
                        "form_id": "2",
                        "active": "1",
                        "name": "Phone Extension",
                        "type": "number",
                        "field_order": "19",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "21",
                        "form_id": "2",
                        "active": "1",
                        "name": "Fax ",
                        "type": "number",
                        "field_order": "20",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "22",
                        "form_id": "2",
                        "active": "1",
                        "name": "Business and Location",
                        "type": "header",
                        "field_order": "1",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "icon": null
                    },
                    {
                        "id": "23",
                        "form_id": "2",
                        "active": "1",
                        "name": "Primary Contact",
                        "type": "header",
                        "field_order": "14",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "icon": null
                    }
                ]
            },
            {
                "id": "3",
                "name": "Additional Addresses",
                "active": "1",
                "form_order": "3",
                "visible": "0",
                "required": "0",
                "message": "You are required to provide address type (Remit)",
                "after_check": null,
                "fields": [
                    {
                        "id": "25",
                        "form_id": "3",
                        "active": "1",
                        "name": "Remittance Email",
                        "type": "input",
                        "field_order": "1",
                        "required": "0",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "26",
                        "form_id": "3",
                        "active": "1",
                        "name": "Address Type",
                        "type": "select",
                        "field_order": "2",
                        "required": "1",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": "",
                        "options": [
                            {
                                "id": "12",
                                "option_value": "PurchasingLocation",
                                "field_id": "26",
                                "display_when": ""
                            },
                            {
                                "id": "13",
                                "option_value": "Remit",
                                "field_id": "26",
                                "display_when": ""
                            }
                        ]
                    },
                    {
                        "id": "27",
                        "form_id": "3",
                        "active": "1",
                        "name": "Address 1",
                        "type": "input",
                        "field_order": "3",
                        "required": "1",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "28",
                        "form_id": "3",
                        "active": "1",
                        "name": "Address 2",
                        "type": "input",
                        "field_order": "4",
                        "required": "0",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "29",
                        "form_id": "3",
                        "active": "1",
                        "name": "Address 3",
                        "type": "input",
                        "field_order": "5",
                        "required": "0",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "30",
                        "form_id": "3",
                        "active": "1",
                        "name": "Address 4",
                        "type": "input",
                        "field_order": "6",
                        "required": "0",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "31",
                        "form_id": "3",
                        "active": "1",
                        "name": "Country ",
                        "type": "select",
                        "field_order": "7",
                        "required": "1",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": "",
                        "is_paren_for": "32",
                        "options": [
                            {
                                "id": "14",
                                "option_value": "US",
                                "field_id": "31",
                                "display_when": ""
                            },
                            {
                                "id": "15",
                                "option_value": "CA",
                                "field_id": "31",
                                "display_when": ""
                            }
                        ]
                    },
                    {
                        "id": "32",
                        "form_id": "3",
                        "active": "1",
                        "name": " State/Province ",
                        "type": "select",
                        "field_order": "8",
                        "required": "1",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": "",
                        "is_child_for": "31",
                        "options": [
                            {
                                "id": "16",
                                "option_value": "Colorado",
                                "field_id": "32",
                                "display_when": "US"
                            },
                            {
                                "id": "17",
                                "option_value": "Florida",
                                "field_id": "32",
                                "display_when": "US"
                            },
                            {
                                "id": "18",
                                "option_value": "Nebraska",
                                "field_id": "32",
                                "display_when": "US"
                            },
                            {
                                "id": "19",
                                "option_value": "Massachusetts",
                                "field_id": "32",
                                "display_when": "US"
                            },
                            {
                                "id": "20",
                                "option_value": "Alberta",
                                "field_id": "32",
                                "display_when": "CA"
                            },
                            {
                                "id": "21",
                                "option_value": "BritishColumbia",
                                "field_id": "32",
                                "display_when": "CA"
                            },
                            {
                                "id": "22",
                                "option_value": "Manitoba",
                                "field_id": "32",
                                "display_when": "CA"
                            }
                        ]
                    },
                    {
                        "id": "33",
                        "form_id": "3",
                        "active": "1",
                        "name": "City",
                        "type": "input",
                        "field_order": "9",
                        "required": "1",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "34",
                        "form_id": "3",
                        "active": "1",
                        "name": "County",
                        "type": "input",
                        "field_order": "10",
                        "required": "1",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "35",
                        "form_id": "3",
                        "active": "1",
                        "name": "Postal Code",
                        "type": "input",
                        "field_order": "11",
                        "required": "1",
                        "multi": "Multi Additional Addresses",
                        "default_value": "",
                        "belong_to": ""
                    }
                ]
            },
            {
                "id": "4",
                "name": "Additional Vendor Contacts",
                "active": "1",
                "form_order": "4",
                "visible": "0",
                "required": "0",
                "message": "You are required to provide address types: ( Remit )",
                "after_check": null,
                "fields": [
                    {
                        "id": "36",
                        "form_id": "4",
                        "active": "1",
                        "name": " Additional Vendor Contact Type ",
                        "type": "select",
                        "field_order": "1",
                        "required": "1",
                        "multi": "Multi Additional Vendor Contacts",
                        "default_value": "",
                        "belong_to": "",
                        "options": [
                            {
                                "id": "23",
                                "option_value": "PurchasingLocation",
                                "field_id": "36",
                                "display_when": ""
                            },
                            {
                                "id": "24",
                                "option_value": "Remit",
                                "field_id": "36",
                                "display_when": ""
                            }
                        ]
                    },
                    {
                        "id": "37",
                        "form_id": "4",
                        "active": "1",
                        "name": "First Name",
                        "type": "input",
                        "field_order": "2",
                        "required": "1",
                        "multi": "Multi Additional Vendor Contacts",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "38",
                        "form_id": "4",
                        "active": "1",
                        "name": " Last Name",
                        "type": "input",
                        "field_order": "3",
                        "required": "1",
                        "multi": "Multi Additional Vendor Contacts",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "39",
                        "form_id": "4",
                        "active": "1",
                        "name": "Phone Number",
                        "type": "number",
                        "field_order": "4",
                        "required": "1",
                        "multi": "Multi Additional Vendor Contacts",
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "40",
                        "form_id": "4",
                        "active": "1",
                        "name": "Email",
                        "type": "input",
                        "field_order": "5",
                        "required": "1",
                        "multi": "Multi Additional Vendor Contacts",
                        "default_value": "",
                        "belong_to": ""
                    }
                ]
            },
            {
                "id": "5",
                "name": "Tax Information",
                "active": "1",
                "form_order": "5",
                "visible": "0",
                "required": "0",
                "message": "You are required to provide tax information",
                "after_check": null,
                "fields": [
                    {
                        "id": "24",
                        "form_id": "5",
                        "active": "1",
                        "name": "Tax Information",
                        "type": "header",
                        "field_order": "1",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "icon": null
                    },
                    {
                        "id": "41",
                        "form_id": "5",
                        "active": "1",
                        "name": " Legal Company Name",
                        "type": "input",
                        "field_order": "2",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "42",
                        "form_id": "5",
                        "active": "1",
                        "name": "Tax Country ",
                        "type": "select",
                        "field_order": "3",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "is_paren_for": "43",
                        "options": [
                            {
                                "id": "25",
                                "option_value": "US",
                                "field_id": "42",
                                "display_when": ""
                            },
                            {
                                "id": "26",
                                "option_value": "CA",
                                "field_id": "42",
                                "display_when": ""
                            }
                        ]
                    },
                    {
                        "id": "43",
                        "form_id": "5",
                        "active": "1",
                        "name": "Tax Type",
                        "type": "select",
                        "field_order": "4",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "is_child_for": "43",
                        "is_paren_for": "44",
                        "options": [
                            {
                                "id": "27",
                                "option_value": "US1",
                                "field_id": "43",
                                "display_when": "US"
                            },
                            {
                                "id": "28",
                                "option_value": "US2",
                                "field_id": "43",
                                "display_when": "US"
                            },
                            {
                                "id": "29",
                                "option_value": "US3",
                                "field_id": "43",
                                "display_when": "US"
                            },
                            {
                                "id": "30",
                                "option_value": "US4",
                                "field_id": "43",
                                "display_when": "US"
                            },
                            {
                                "id": "31",
                                "option_value": "US5",
                                "field_id": "43",
                                "display_when": "US"
                            },
                            {
                                "id": "32",
                                "option_value": "US6",
                                "field_id": "43",
                                "display_when": "US"
                            },
                            {
                                "id": "33",
                                "option_value": "CA1",
                                "field_id": "43",
                                "display_when": "CA"
                            },
                            {
                                "id": "34",
                                "option_value": "CA2",
                                "field_id": "43",
                                "display_when": "CA"
                            },
                            {
                                "id": "35",
                                "option_value": "CA3",
                                "field_id": "43",
                                "display_when": "CA"
                            }
                        ]
                    },
                    {
                        "id": "44",
                        "form_id": "5",
                        "active": "1",
                        "name": "Tax ID Number",
                        "type": "number",
                        "field_order": "5",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "is_child_for": "43",
                        "belong_to": ""
                    },
                    {
                        "id": "45",
                        "form_id": "5",
                        "active": "1",
                        "name": "1099 Classification",
                        "type": "header",
                        "field_order": "6",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "icon": null
                    },
                    {
                        "id": "46",
                        "form_id": "5",
                        "active": "1",
                        "name": "1099 Classification",
                        "type": "description",
                        "field_order": "7",
                        "required": "0",
                        "multi": null,
                        "default_value": "Please identify if the products or services you are providing to US Silica are 1099 Reportable.\nYour 1099 status will be reviewed &amp; finalized based on your submission &amp; review of your W-9.",
                        "belong_to": ""
                    },
                    {
                        "id": "47",
                        "form_id": "5",
                        "active": "1",
                        "name": "Are you 1099 Reportable?",
                        "type": "select",
                        "field_order": "8",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "is_paren_for": "48",
                        "options": [
                            {
                                "id": "36",
                                "option_value": "Yes",
                                "field_id": "47",
                                "display_when": ""
                            },
                            {
                                "id": "37",
                                "option_value": "No",
                                "field_id": "47",
                                "display_when": ""
                            }
                        ]
                    },
                    {
                        "id": "48",
                        "form_id": "5",
                        "active": "1",
                        "name": "What is your 1099 Classification?",
                        "type": "select",
                        "field_order": "9",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "is_child_for": "47",
                        "options": [
                            {
                                "id": "38",
                                "option_value": "Rent",
                                "field_id": "48",
                                "display_when": "Yes"
                            },
                            {
                                "id": "39",
                                "option_value": "Royalties",
                                "field_id": "48",
                                "display_when": "Yes"
                            },
                            {
                                "id": "40",
                                "option_value": "OtherIncome",
                                "field_id": "48",
                                "display_when": "Yes"
                            },
                            {
                                "id": "41",
                                "option_value": "Federalincometaxwithheld(MISC-04)",
                                "field_id": "48",
                                "display_when": "Yes"
                            },
                            {
                                "id": "42",
                                "option_value": "Fishingboatproceeds",
                                "field_id": "48",
                                "display_when": "Yes"
                            }
                        ]
                    },
                    {
                        "id": "49",
                        "form_id": "5",
                        "active": "1",
                        "name": "Tax Document",
                        "type": "header",
                        "field_order": "10",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "icon": null
                    },
                    {
                        "id": "50",
                        "form_id": "5",
                        "active": "1",
                        "name": "Tax Document Name",
                        "type": "select",
                        "field_order": "11",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "is_paren_for": "51",
                        "options": [
                            {
                                "id": "43",
                                "option_value": "W-8BEN",
                                "field_id": "50",
                                "display_when": ""
                            },
                            {
                                "id": "44",
                                "option_value": "W-8BEN-E",
                                "field_id": "50",
                                "display_when": ""
                            },
                            {
                                "id": "45",
                                "option_value": "W-8ECI",
                                "field_id": "50",
                                "display_when": ""
                            },
                            {
                                "id": "46",
                                "option_value": "W-8EXP",
                                "field_id": "50",
                                "display_when": ""
                            },
                            {
                                "id": "47",
                                "option_value": "W-8IMY",
                                "field_id": "50",
                                "display_when": ""
                            },
                            {
                                "id": "48",
                                "option_value": "W-9",
                                "field_id": "50",
                                "display_when": ""
                            }
                        ]
                    },
                    {
                        "id": "51",
                        "form_id": "5",
                        "active": "1",
                        "name": "Tax Document Upload",
                        "type": "file",
                        "field_order": "12",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "is_child_for": "50",
                        "belong_to": ""
                    }
                ]
            },
            {
                "id": "6",
                "name": "Banking Details",
                "active": "1",
                "form_order": "6",
                "visible": "0",
                "required": "0",
                "message": "You are required to fill bank details",
                "after_check": null,
                "fields": [
                    {
                        "id": "52",
                        "form_id": "6",
                        "active": "1",
                        "name": "Bank Information",
                        "type": "header",
                        "field_order": "1",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "icon": null
                    },
                    {
                        "id": "53",
                        "form_id": "6",
                        "active": "1",
                        "name": "Bank Name",
                        "type": "input",
                        "field_order": "2",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "54",
                        "form_id": "6",
                        "active": "1",
                        "name": "Bank Country ",
                        "type": "select",
                        "field_order": "3",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "is_paren_for": "58",
                        "options": [
                            {
                                "id": "49",
                                "option_value": "US",
                                "field_id": "54",
                                "display_when": ""
                            },
                            {
                                "id": "50",
                                "option_value": "CA",
                                "field_id": "54",
                                "display_when": ""
                            }
                        ]
                    },
                    {
                        "id": "55",
                        "form_id": "6",
                        "active": "1",
                        "name": "Address 1",
                        "type": "input",
                        "field_order": "4",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "56",
                        "form_id": "6",
                        "active": "1",
                        "name": "Address 2",
                        "type": "input",
                        "field_order": "5",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "57",
                        "form_id": "6",
                        "active": "1",
                        "name": "Address 3",
                        "type": "input",
                        "field_order": "6",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "58",
                        "form_id": "6",
                        "active": "1",
                        "name": "State/Province",
                        "type": "select",
                        "field_order": "7",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "is_child_for": "54",
                        "belong_to": "",
                        "options": [
                            {
                                "id": "51",
                                "option_value": "Colorado",
                                "field_id": "58",
                                "display_when": "US"
                            },
                            {
                                "id": "52",
                                "option_value": "Florida",
                                "field_id": "58",
                                "display_when": "US"
                            },
                            {
                                "id": "53",
                                "option_value": "Nebraska",
                                "field_id": "58",
                                "display_when": "US"
                            },
                            {
                                "id": "54",
                                "option_value": "Massachusetts",
                                "field_id": "58",
                                "display_when": "US"
                            },
                            {
                                "id": "55",
                                "option_value": "Alberta",
                                "field_id": "58",
                                "display_when": "CA"
                            },
                            {
                                "id": "56",
                                "option_value": "BritishColumbia",
                                "field_id": "58",
                                "display_when": "CA"
                            },
                            {
                                "id": "57",
                                "option_value": "Manitoba",
                                "field_id": "58",
                                "display_when": "CA"
                            }
                        ]
                    },
                    {
                        "id": "59",
                        "form_id": "6",
                        "active": "1",
                        "name": "City",
                        "type": "input",
                        "field_order": "8",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "60",
                        "form_id": "6",
                        "active": "1",
                        "name": "Postal Code",
                        "type": "input",
                        "field_order": "9",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "61",
                        "form_id": "6",
                        "active": "1",
                        "name": "Account Information",
                        "type": "header",
                        "field_order": "10",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "icon": null
                    },
                    {
                        "id": "62",
                        "form_id": "6",
                        "active": "1",
                        "name": "Account Holder First Name ",
                        "type": "input",
                        "field_order": "11",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "63",
                        "form_id": "6",
                        "active": "1",
                        "name": "Account Holder Last Name",
                        "type": "input",
                        "field_order": "12",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "64",
                        "form_id": "6",
                        "active": "1",
                        "name": " ABA Routing No",
                        "type": "input",
                        "field_order": "13",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "65",
                        "form_id": "6",
                        "active": "1",
                        "name": "Account Number",
                        "type": "input",
                        "field_order": "14",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    }
                ]
            },
            {
                "id": "7",
                "name": "Minority/Diversity Certification",
                "active": "1",
                "form_order": "7",
                "visible": "0",
                "required": "0",
                "message": "",
                "after_check": "Add Minority/Diversity Certification",
                "fields": [
                    {
                        "id": "66",
                        "form_id": "7",
                        "active": "1",
                        "name": "Diverisy Certificate Type",
                        "type": "select",
                        "field_order": "1",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "is_paren_for": "69",
                        "options": [
                            {
                                "id": "58",
                                "option_value": "VeteranBusinessEnterprises(VBE)",
                                "field_id": "66",
                                "display_when": ""
                            },
                            {
                                "id": "59",
                                "option_value": "WomenOwnedSmallBusinesses(WOSB)",
                                "field_id": "66",
                                "display_when": ""
                            },
                            {
                                "id": "60",
                                "option_value": "SmallDisadvantagedBusinesses(SDB)",
                                "field_id": "66",
                                "display_when": ""
                            },
                            {
                                "id": "61",
                                "option_value": "DisadvantageBusinessEnterprise",
                                "field_id": "66",
                                "display_when": ""
                            }
                        ]
                    },
                    {
                        "id": "67",
                        "form_id": "7",
                        "active": "1",
                        "name": "Certificate Start Date",
                        "type": "date_picker",
                        "field_order": "2",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "68",
                        "form_id": "7",
                        "active": "1",
                        "name": "Certificate Expiration Date",
                        "type": "date_picker",
                        "field_order": "3",
                        "required": "1",
                        "multi": null,
                        "default_value": "",
                        "belong_to": ""
                    },
                    {
                        "id": "69",
                        "form_id": "7",
                        "active": "1",
                        "name": "Upload Diversity Certificate",
                        "type": "file",
                        "field_order": "4",
                        "required": "1",
                        "multi": null,
                        "is_child_for": "66",
                        "default_value": "",
                        "belong_to": ""
                    }
                ]
            }
        ]
    },
    {
        "onboarding_name": "Audit Onboarding",
        "onboarding_id": "2",
        "forms": [
            {
                "id": "8",
                "name": "Terms and Condition",
                "active": "1",
                "form_order": "1",
                "visible": "0",
                "required": "0",
                "message": "",
                "after_check": null,
                "fields": [
                    {
                        "id": "70",
                        "form_id": "8",
                        "active": "1",
                        "name": "Terms &amp; Conditions (T&amp;C)",
                        "type": "downloadfile",
                        "field_order": "1",
                        "required": "0",
                        "multi": null,
                        "default_value": "",
                        "belong_to": "",
                        "path": ""
                    }
                ]
            },
            {
                "id": "9",
                "name": "Company Information",
                "active": "1",
                "form_order": "2",
                "visible": "0",
                "required": "0",
                "message": " You are required to fill this information",
                "after_check": null
            },
            {
                "id": "10",
                "name": "Country Specific Tax Information",
                "active": "1",
                "form_order": "3",
                "visible": "0",
                "required": "0",
                "message": "",
                "after_check": null
            },
            {
                "id": "11",
                "name": "Additional Addresses",
                "active": "1",
                "form_order": "4",
                "visible": "0",
                "required": "0",
                "message": "You are required to provide address type (Remit)",
                "after_check": null
            },
            {
                "id": "12",
                "name": "Tax Information",
                "active": "1",
                "form_order": "5",
                "visible": "0",
                "required": "0",
                "message": "You are required to provide tax information ",
                "after_check": null
            },
            {
                "id": "13",
                "name": "Banking Details",
                "active": "1",
                "form_order": "6",
                "visible": "0",
                "required": "0",
                "message": "You are required to fill bank details ",
                "after_check": null
            },
            {
                "id": "14",
                "name": "Benificiary Bank Details",
                "active": "1",
                "form_order": "7",
                "visible": "0",
                "required": "0",
                "message": "",
                "after_check": null
            },
            {
                "id": "15",
                "name": "Products and Categories Information",
                "active": "1",
                "form_order": "8",
                "visible": "0",
                "required": "0",
                "message": "",
                "after_check": null
            },
            {
                "id": "16",
                "name": "Additional Vendor Contacts",
                "active": "1",
                "form_order": "9",
                "visible": "0",
                "required": "0",
                "message": "You are required to provide address types: ( Remit ) ",
                "after_check": null
            },
            {
                "id": "17",
                "name": "Trade References",
                "active": "1",
                "form_order": "10",
                "visible": "0",
                "required": "0",
                "message": "",
                "after_check": null
            },
            {
                "id": "18",
                "name": "Insurance Information",
                "active": "1",
                "form_order": "11",
                "visible": "0",
                "required": "0",
                "message": "",
                "after_check": null
            },
            {
                "id": "19",
                "name": "Industry Certifications",
                "active": "1",
                "form_order": "12",
                "visible": "0",
                "required": "0",
                "message": "",
                "after_check": "Add Industry Certifications"
            }
        ]
    }
]

export default data