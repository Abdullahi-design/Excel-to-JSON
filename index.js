const XLSX = require('xlsx');
const fs = require('fs');

function excelToJson(filePath, outputJsonPath) {
    // Load the workbook
    const workbook = XLSX.readFile(filePath);
    
    // Parse the first worksheet
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];
    
    // Manually specifying headers based on provided list
    const headers = [
        "S/N", "JP/P.NO", "NAME", "LGA", "Senatorial District", "STATE", "Geopolitical Zone", "Date of Birth", "GENDER", 
        "Faculty", "Department", "Date 1st Assumed Duty", "Type of Appt", "Nature of Appt", "Date of Confirmation", 
        "Date of Last Promotion", "Present Rank", "Salary", "Highest Qualification", "Qualifications", "Remarks"
    ];
    
    // Convert to JSON using defined headers
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: headers });
    
    // Write JSON to file
    fs.writeFileSync(outputJsonPath, JSON.stringify(jsonData, null, 2));
}

excelToJson('./file.xlsx', './output.json');
