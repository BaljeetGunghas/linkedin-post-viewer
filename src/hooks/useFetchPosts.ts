"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { LinkedInApiResponse } from '../types/postTypes';

type PostFilters = {
  keyword?: string;
  sortBy?: string;
  datePosted?: string;
  page?: number;
  contentType?: string;
  fromMember?: string[];
  fromCompany?: string[];
  mentionsMember?: string[];
  mentionsOrganization?: string[];
  authorIndustry?: string[];
  authorCompany?: string[];
  authorTitle?: string;
};

const useFetchPosts = (filters: PostFilters) => {
  const [data, setData] = useState<LinkedInApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          'https://linkedin-api8.p.rapidapi.com/search-posts ',
          {
            keyword: filters.keyword || '',
            sortBy: filters.sortBy || 'date_posted',
            datePosted: filters.datePosted || '',
            page: filters.page || 1,
            contentType: filters.contentType || '',
            fromMember: filters.fromMember || [],
            fromCompany: filters.fromCompany || [],
            mentionsMember: filters.mentionsMember || [],
            mentionsOrganization: filters.mentionsOrganization || [],
            authorIndustry: filters.authorIndustry || [],
            authorCompany: filters.authorCompany || [],
            authorTitle: filters.authorTitle || '',
          },
          {
            headers: {
              'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
              'X-RapidAPI-Host': process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST,
              'Content-Type': 'application/json',
            },
          }
        );

        setData(response.data || null);
      } catch (err) {
        console.error(err);
        setError('You have exceeded the MONTHLY quota for Credits on your current plan, BASIC. Upgrade your plan at https:\/\/rapidapi.com\/rockapis-rockapis-default\/api\/linkedin-api8');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters)]); // rerun on any filter change

  return { data, loading, error };
};

export default useFetchPosts;
