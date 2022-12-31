import { Injectable } from "@angular/core";
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: "root"
})
export class JsonToExcelService {
  private generateFile(excelData: any, fileName: string, header: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(fileName);
    worksheet.addRow(header);

    for (const x1 of excelData) {
      const x2: any = Object.keys(x1);
      const temp: any[] = [];
      for (const y of x2) {
        temp.push(x1[y]);
      }
      worksheet.addRow(temp);
    }
    const fname = fileName;

    //add data and file name and download
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, fname + '.xlsx');
    });
  }

  downloadExcelFile() {
    const data = [
      {
        column1: "a",
        column2: "b",
        column3: "c",
        column4: "d"
      },
      {
        column1: "a",
        column2: "b",
        column3: "c",
        column4: "d"
      }
    ];

    const fileName = "json2excel"

    this.generateFile(data, fileName, ["column1", "column2", "column3", "column4"]);
  }

}
