import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
      <h2 className='text-3xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
    <Outlet></Outlet>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My Appointments</Link></li>
      <li><Link to="/dashboard/review">My Reviews</Link></li>
      <li><Link to="/dashboard/users">All Users</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Dashboard;