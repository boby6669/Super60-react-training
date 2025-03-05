import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div>
      <nav className="bg-gray-800 flex justify-between items-center text-white p-5">
        <div>
          <Link to="#" className="text-2xl font-bold">
            Admin Panel
          </Link>
        </div>
        <ul className="flex justify-between gap-x-8 items-center px-3">
          <li>
            <Link to="/admin" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/sales" className="hover:text-gray-300">
              Sales
            </Link>
          </li>
          <li>
            <Link to="/admin/statistics" className="hover:text-gray-300">
              Statistics
            </Link>
          </li>
          <li>
            <Link to="/admin/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
