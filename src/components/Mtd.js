import React from 'react';

import { Tooltip ,OverlayTrigger } from 'react-tooltip'

import   '../styles/Table.module.css';
import styles from '../styles/Username.module.css';

export default function Mtd() {
  /*   const today = new Date();
     const targertDate = new Date(today.getFullYear() + 1, today.getMonth() + 2, today.getDay())
    const todos = [
        { id: 1, description: 'Learn AWS', done: false, targetDate: targertDate },
        { id: 2, description: 'Learn Java', done: false, targetDate: new Date(today.getFullYear() + 2, today.getMonth() + 3, today.getDay() + 2) },
       { id: 3, description: 'Learn FullStack', done: false, targetDate: new Date(today.getFullYear() + 1, today.getMonth() + 3, today.getDay() + 4) }

    ] */

    const customers=[
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:1,transaction_id:'27200648-eb07-46d8-830e-6a2d48c28ca3',external_partner_id:'DEMO_M999_JPMC',company_name:'VM',order_date:'2022-05-13 20:15:58.606000',region:'NA',is_active:true,sid:'M480987421',created_by:'admin',created_ts:'2023-04-21 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:2,transaction_id:'1ff491ee-83ac-46b9-ac81-93b337117215',external_partner_id:'DEMO_VMW_ADREANO',company_name:'VMWAdreanoDemo',order_date:'2022-05-18 19:14:08.231000',region:'NA',is_active:true,sid:null,created_by:'admin',created_ts:'2023-06-10 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:3,transaction_id:'3fe078d6-e733-11ec-8fea-0242ac120002',external_partner_id:'TRIAL_VMW_3Mo_JnJ',company_name:'Johnson&Johnson',order_date:'2022-06-08 14:00:37.141000',region:'NA',is_active:true,sid:'M343485643',created_by:'admin',created_ts:'2023-07-05 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:4,transaction_id:'804ab8a4-f9fe-4cbe-aa2b-b740c2b9776c',external_partner_id:'M228406627_CONTINENTAL_CASUALTY',company_name:'CONTINENTAL_CASUALTY',order_date:'2022-10-24 20:35:30.727000',region:'NA',is_active:true,sid:'M228406627',created_by:'admin',created_ts:'2023-05-20 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'},
        {id:5,transaction_id:'0e1b574f-e400-48ae-9a44-82c887ec4675',external_partner_id:'M101908765_NYU_LANGONE',company_name:'NYU_LANGONE',order_date:'2023-01-03 16:57:29.824000',region:'NA',is_active:true,sid:'M176301232',created_by:'admin',created_ts:'2023-03-15 11:17:21.785668',update_by:'admin',update_ts:'2023-06-09 11:17:21.785668'}


    ]

    function editToDo(id,desc){
        console.log('Edit Called: '+id)
        
      }
    
      function addToDo(){
        console.log("Addeing New ToDo ")
      }

      function deleteToDo(id,desc){
        console.log('Delete :'+id)
       
      }

      function changeStatus(id,partner,status){
        console.log('Change Status :'+id+" Status :"+status)
        if (status) {
            console.log("Current Status Active , Deactive it")
        }
        else {
            console.log("Current State Deactivate , Activate it")
        }
       
      }

  return (

    <div className='flex justify-center items-center'>
    <div className={styles.glass} style={{width:"80%"}}>
       
    <div className="title flex flex-col items-center">
    <h3 className='text-5xl font-bold'>Customers</h3>
    
    <div style={{overflow:"scroll" , height:"700px"}}>
    <table className="table  table-hover table-borderless table-striped vertical">
        <thead className="table-dark sticky-top">
            <tr>
                <th>TransactionId</th>
                <th>ExternalPartnerId</th>
                <th>CompanyName</th>
                <th>OrderDate</th>
                <th>Region</th>
                <th>Active</th>
                <th>Sid</th>
                <th>SidSec</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>

        </thead>
        <tbody>
            {
                customers.map(
                    customer => (
                        <tr key={customer.id}>
                           <td> {customer.transaction_id} </td>
                            <td>{customer.external_partner_id}</td>
                            <td>{customer.company_name}</td>
                            <td>{customer.order_date}</td>
                            <td>{customer.region}</td>
                            <td>{customer.is_active.toString()}</td>
                            <td>{customer.sid}</td>
                            <td>{customer.sid}</td>
                          <td><button className='btn btn-outline-warning' onClick={()=>changeStatus(customer.id,customer.external_partner_id,customer.is_active)}>Status</button></td>
                          <td><button className='btn btn-outline-primary ' onClick={()=>editToDo(customer.id,customer.external_partner_id)}> Edit </button></td> 
                           {/*
                           <td> 
                           <div class="form-check form-switch">
                           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                           <label class="form-check-label" for="flexSwitchCheckChecked">State</label>
                           </div>
                           
                            </td>
                    */}
                            <td><button className='btn btn-outline-danger' onClick={()=>deleteToDo(customer.id,customer.external_partner_id)}>Delete</button></td>
                            <td data-tooltip-id="tooltip"  data-tooltip-place="bottom"> </td>
                            <Tooltip id="tooltip" >
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>Created By : {customer.created_by}</span>
                            <span>Created At: {customer.created_ts}</span>
                            <span>Updated By : {customer.update_by}</span>
                            <span>Updated At: {customer.update_ts}</span>
                                </div>
                                </Tooltip>

                        </tr>
                    )
                )
            }

        </tbody>
    </table>
    </div>
    <div className='btn btn-outline-success m-7' onClick={addToDo}>
                New Customer
            </div>
</div>
</div>

</div>
  );
}