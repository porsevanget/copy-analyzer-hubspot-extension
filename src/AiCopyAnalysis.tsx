import React, { useState } from 'react';
import {
  hubspot,
  Button,
  Flex,
  Text,
  Alert,
} from '@hubspot/ui-extensions';

export default function AiCopyAnalysis() {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    setError('');
    setAnalysis('');

    if (!text) {
      setError('Please enter text to analyze.');
      return;
    }

    try {
      const response = await fetch('https://your-copy-analyzer-app.vercel.app/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze text.');
      }

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    }
  };

  return (
    <Flex direction="column" gap="sm">
      <Text>
        Enter your copy below and we'll provide an analysis.
      </Text>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your copy here..."
        rows={5}
        style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #cbd6e2' }}
      />
      <Button onClick={handleAnalyze} variant="primary">
        Analyze Copy
      </Button>
      {error && <Alert title="Error" variant="error">{error}</Alert>}
      {analysis && (
        <Flex direction="column" gap="sm">
          <Text format={{ fontWeight: 'bold' }}>Analysis Result:</Text>
          <Text>{analysis}</Text>
        </Flex>
      )}
    </Flex>
  );
};

hubspot.extend(() => <AiCopyAnalysis />);
