// json2html.js

export default function json2html(data) {
    // Extract unique columns from the data
    const columns = [...new Set(data.flatMap(Object.keys))];
  
    // Create table HTML with data-user attribute
    let html = `<table data-user="ayush.skt001@gmail.com">`;
    
    // Add table headers
    html += `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;
  
    // Add table body rows
    html += `<tbody>`;
    for (const row of data) {
      html += `<tr>${columns.map(col => `<td>${row[col] ?? ''}</td>`).join('')}</tr>`;
    }
    html += `</tbody></table>`;
  
    return html;
  }
  