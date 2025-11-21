import { type UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Header with avatar placeholder */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
          {name.charAt(0)}
        </div>
        <h3 className="text-2xl font-bold text-center">{name}</h3>
        <p className="text-center opacity-90">@{username}</p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium text-gray-800 break-all">{email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Address</p>
          <p className="font-medium text-gray-700">
            {address.street}, {address.suite}
            <br />
            {address.city}, {address.zipcode}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p className="font-medium text-gray-800">{phone}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Website</p>
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            {website}
          </a>
        </div>

        <div>
          <p className="text-sm text-gray-500">Company</p>
          <p className="font-semibold text-gray-800">{company.name}</p>
        </div>
      </div>

      {/* Footer badge */}
      <div className="bg-gray-50 px-6 py-3 border-t">
        <span className="text-sm font-medium text-indigo-600">
          User ID: {id}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
