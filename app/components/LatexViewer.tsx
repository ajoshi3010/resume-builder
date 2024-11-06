import { useState } from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

const LatexViewer: React.FC = () => {
  const [latexInput, setLatexInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLatexInput(e.target.value);
  };

  const renderLatex = (input: string): string => {
    try {
      // Renders LaTeX code to HTML string
      return katex.renderToString(input, {
        throwOnError: false,
        displayMode: true, // renders in display mode
      });
    } catch (err) {
      return "<p style='color: red;'>Error: Invalid LaTeX</p>";
    }
  };

  return (
    <div className="latex-viewer">
      <textarea
        placeholder="Enter your LaTeX code here..."
        value={latexInput}
        onChange={handleChange}
        rows={6}
        cols={50}
        style={{
          width: '100%',
          height: '200px',
          borderRadius: '5px',
          padding: '10px',
          fontFamily: 'monospace',
          fontSize: '14px',
          marginBottom: '20px',
        }}
      />
      <div
        className="latex-output"
        dangerouslySetInnerHTML={{ __html: renderLatex(latexInput) }}
      />
    </div>
  );
};

export default LatexViewer;
