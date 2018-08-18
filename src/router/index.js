import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminLogin from '@/view/Admin/AdminLogin/AdminLogin';
import Links from '@/view/Admin/Links/Links';
import AddStaff from '@/view/Admin/AddStaff/AddStaff';
import EditStaff from '@/view/Admin/EditStaff/EditStaff';
import StaffLogin from '@/view/StaffLogin/StaffLogin';
import Font from '@/view/Font/Font';
import Back from '@/view/Back/Back';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin/adminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/admin/links',
      name: 'Links',
      component: Links
    },
    {
      path: '/admin/addStaff',
      name: 'AddStaff',
      component: AddStaff
    },
    {
      path: '/admin/editStaff',
      name: 'EditStaff',
      component: EditStaff
    },
    {
      path: '/staffLogin',
      name: 'StaffLogin',
      component: StaffLogin
    },
    {
      path: '/font',
      name: 'Font',
      component: Font
    },
    {
      path: '/back',
      name: 'Back',
      component: Back
    }
  ]
})
