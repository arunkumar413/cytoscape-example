import React, { useState, useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

export default function App() {
  const containerRef = useRef();

  useEffect(() => {
    const config = {
      container: containerRef.current,
      style: [
        {
          selector: 'node',
          style: { content: 'data(id)' },
        },
      ],
      elements: [
        { data: { id: '1' }, position: { x: 10, y: 10 } },
        {
          // node n3
          data: { id: '2' },
          position: { x: 10, y: 30 },
        },

        { data: { id: '3' }, position: { x: 10, y: 60 } },
        // { data: { id: 'e1', source: 'n1', target: 'n2' } },
        { group: 'nodes', data: { id: 'n0' }, position: { x: 100, y: 100 } },
      ],

      style: [
        {
          selector: 'node',
          style: {
            shape: 'circle',
            backgroundColor: 'red',
            width: 8,
            height: 8,
          },
        },
      ],

      layout: {
        name: 'preset',
        zoom: 1,
        pan: 1,
        fit: true,
      },
    };

    cytoscape(config);
  }, []);

  return (
    <div>
      <div ref={containerRef} style={{ height: 1000, width: 1000 }} />
    </div>
  );
}
