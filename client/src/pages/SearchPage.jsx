import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Search from '../components/Search';
import Loader from '../components/Loader';
const MemoizedNavBar = React.memo(NavBar);
const MemoizedSideBar = React.memo(SideBar);

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const initialQuery = searchParams.get('q') || '';
    setQuery(initialQuery);
    if (initialQuery) {
      fetchSearchResults(initialQuery);
    }
  }, [searchParams]);

  const fetchSearchResults = async (searchQuery) => {
    setLoading(true);
    setError(''); // Reset error before making a new request
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `https://doubtly-backend.onrender.com/api/doubt/search?q=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setResults(response.data.result || []);
      console.log(results) // Ensure results is always an array
    } catch (err) {
      setError('Failed to fetch search results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDoubtClick = (doubt) => {
    navigate(`/dashboard/doubt/${doubt.id}`);
  };

  if (loading) {
    return (
      <>
        <NavBar doubtly={true} searchBar={true} notification={true} profile={true} />
        <SideBar />
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      </>
    );
  }

  return (
    <>
    <MemoizedNavBar 
        doubtly={true}
        searchBar={true}
        notification={true}
        profile={true}
      />
      <MemoizedSideBar />
      <Search />
    </>
  );
};

export default SearchPage;
