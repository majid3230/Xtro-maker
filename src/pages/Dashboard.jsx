import React, { useState, useEffect } from "react";
import { apiService } from "../services/api.js";
import { useToast } from "../hooks/useToast.js";
import { copyToClipboard, downloadAsTxt } from "../utils/helpers.js";
import Skeleton from "../components/Skeleton.jsx";
import { Copy, Download, RefreshCw } from "lucide-react";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    try {
      // Mocking an API call with JSONPlaceholder since this is a template
      const response = await apiService.get('/users/1');
      setData(response);
      addToast('Data loaded successfully', 'success');
    } catch (error) {
      addToast(error.message, 'error');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCopy = async () => {
    if (!data) return;
    const success = await copyToClipboard(JSON.stringify(data, null, 2));
    if (success) {
      addToast('Copied to clipboard', 'success');
    } else {
      addToast('Failed to copy', 'error');
    }
  };

  const handleDownload = () => {
    if (!data) return;
    downloadAsTxt('dashboard-data', JSON.stringify(data, null, 2));
    addToast('Download started', 'success');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>Overview of your account data</p>
      </header>

      <div className={styles.actions}>
        <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={fetchData} disabled={loading}>
          <RefreshCw size={18} style={loading ? { animation: 'spin 1s linear infinite' } : {}} />
          Refresh Data
        </button>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>User Information</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className={styles.btn} onClick={handleCopy} disabled={loading || !data} aria-label="Copy data">
              <Copy size={16} />
            </button>
            <button className={styles.btn} onClick={handleDownload} disabled={loading || !data} aria-label="Download data">
              <Download size={16} />
            </button>
          </div>
        </div>

        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Skeleton height="30px" />
            <Skeleton height="20px" width="80%" />
            <Skeleton height="20px" width="60%" />
            <Skeleton height="20px" width="70%" />
          </div>
        ) : data ? (
          <pre className={styles.dataContent}>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <div className={styles.emptyState}>
            <p>No data available. Try refreshing.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
