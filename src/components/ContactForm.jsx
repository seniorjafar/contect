import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name,
      lastName,
      phone,
      gender,
    };
    setSubmittedData([...submittedData, newData]);
    setName('');
    setLastName('');
    setPhone('');
    setGender('');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = submittedData.filter((data) => {
    return (
      data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.gender.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='d-flex container-sm justify-content-center gap-3 bg-primary'>
      <form onSubmit={handleSubmit} className='d-grid p-3 align-items-center'>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className='d-flex gap-2 p-2'>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className=''>
            <input
              type="text"
              className="form-control"
              placeholder="Lastname"
              aria-label="Lastname"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='p-2'>
          <input
            className="form-control"
            placeholder="Phone"
            aria-label="phone"
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className='p-2'>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button className='btn btn-success p-2' type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
    <table className='mt-3 table table-striped'>
      <thead className=''>
         {filteredData.map((data, index) => (
        <tr key={index}>
          <td>{data.name}</td>
          <td>{data.lastName}</td>
          <td>{data.phone}</td>
          <td>{data.gender}</td>
        </tr>
      ))}
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.lastName}</td>
                <td>{data.phone}</td>
                <td>{data.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactForm;