import {HiOutlineAnnotation, HiOutlineCog, HiOutlineCube, HiOutlineDocumentText, HiOutlineQuestionMarkCircle, HiOutlineShoppingCart, HiOutlineUser, HiOutlineViewGrid } from "react-icons/hi";

export const Dashboard_Sidebar_Link = [
    {
        key:'dashboard',
        label:'Dashboard',
        path:'/',
        icon:<HiOutlineViewGrid/>
    },
    {
        key:'products',
        label:'Products',
        path:'/products',
        icon:<HiOutlineCube/>
    },
    {
        key:'orders',
        label:'Orders',
        path:'/orders',
        icon:<HiOutlineShoppingCart/>
    },
    {
        key:'customers',
        label:'FAQ',
        path:'/faq',
        icon:<HiOutlineUser/>
    },
    { 
        key:'transaction',
        label:'Transaction',
        path:'/transaction',
        icon:<HiOutlineDocumentText/>
    },
    {
        key:'messages',
        label:'Messages',
        path:'/messages',
        icon:<HiOutlineAnnotation/>
    },
]

export const Dashboard_Sidebar_Bottom_Link = [
    {
        key:'settings',
        label:'Settings',
        path:'/setting',
        icon:<HiOutlineCog/>  
    },
    {
        key:'support',
        label:'Help & Support',
        path:'/helpsupport',
        icon:<HiOutlineQuestionMarkCircle/>  
    },
]