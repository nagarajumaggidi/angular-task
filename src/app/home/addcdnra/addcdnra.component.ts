import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fullobject14 } from '../invoice';
import { IndexService } from 'src/app/index/services/index.service';
@Component({
  selector: 'app-addcdnra',
  templateUrl: './addcdnra.component.html',
  styleUrls: ['./addcdnra.component.scss']
})
export class AddcdnraComponent implements OnInit {
  getinvoice: any;
  gstinvoiceform: FormGroup;
  invoiceres: any;
  constructor(private DataService: DataService, private fb: FormBuilder, private dataservice: DataService,
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.gstinvoiceform = this.fb.group({
      "gstin": [null, Validators.required],
      "ret_period": [null, Validators.required],
      "gt": [null, Validators.required],
      "cur_gt": [null, Validators.required],
      "ctin": [null, Validators.required],
      "inum": [null, Validators.required],
      "idt": [null, Validators.required],
      "val": [null, Validators.required],
      "pos": [null, Validators.required],
      "rchrg": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "etin": [null, Validators.required],
      "inv_typ": [null, Validators.required],
      "diff_percent": [null, Validators.required],

      "num": [null, Validators.required],
      "rt": [null, Validators.required],
      "txval": [null, Validators.required],
      "iamt": [null, Validators.required],
      "csamt": [null, Validators.required],

      "oinum": [null, Validators.required],
      "oidt": [null, Validators.required],
      "camt": [null, Validators.required],
      "samt": [null, Validators.required],
      "sply_ty": [null, Validators.required],

      "typ": [null, Validators.required],
      "omon": [null, Validators.required],

      "expt_amt": [null, Validators.required],
      "nil_amt": [null, Validators.required],
      "ngsup_amt": [null, Validators.required],

      "ctincdnra": [null,Validators.required],

      "nttycdnra": [null,Validators.required],

      "ont_numcdnra": [null,Validators.required],

      "ont_dtcdnra": [null,Validators.required],

      "nt_numcdnra": [null, Validators.required],

      "nt_dtcdnra": [null, Validators.required],

      "p_gstcdnra": [null, Validators.required],

      "inumcdnra": [null,Validators.required],

      "diff_percentcdnra": [null,Validators.required],

      "idtcdnra": [null,Validators.required],

      "valcdnra": [null,Validators.required],

      "numcdnra": [null,Validators.required],

      "rtcdnra": [null,Validators.required],

      "txvalcdnra": [null,Validators.required],

      "iamtcdnra": [null, Validators.required],

      "camtcdnra": [null, Validators.required],

      "samtcdnra": [null,Validators.required],

      "csamtcdnra": [null,Validators.required],





    })
  }

  saveGSTInvoiceobj() {

    let fullObject: fullobject14 =

    {
      gstin: this.gstinvoiceform.get('gstin').value,
      ret_period: this.gstinvoiceform.get('ret_period').value,
      gt: this.gstinvoiceform.get('gt').value,
      cur_gt: this.gstinvoiceform.get('cur_gt').value,

      cdnra: [

        {

          ctin: this.gstinvoiceform.get('ctincdnra').value,

          nt: [

            {

              ntty: this.gstinvoiceform.get('nttycdnra').value,

              ont_num: this.gstinvoiceform.get('ont_numcdnra').value,

              ont_dt: this.gstinvoiceform.get('ont_dtcdnra').value,

              nt_num: this.gstinvoiceform.get('nt_numcdnra').value,

              nt_dt: this.gstinvoiceform.get('nt_dtcdnra').value,

              p_gst: this.gstinvoiceform.get('p_gstcdnra').value,

              inum: this.gstinvoiceform.get('inumcdnra').value,

              diff_percent: this.gstinvoiceform.get('diff_percentcdnra').value,

              idt: this.gstinvoiceform.get('idtcdnra').value,

              val: this.gstinvoiceform.get('valcdnra').value,

              itms: [

                {

                  num: this.gstinvoiceform.get('numcdnra').value,

                  itm_det: {

                    rt: this.gstinvoiceform.get('rtcdnra').value,

                    txval: this.gstinvoiceform.get('txvalcdnra').value,

                    iamt: this.gstinvoiceform.get('iamtcdnra').value,

                    camt: this.gstinvoiceform.get('csamtcdnra').value,

                    samt: this.gstinvoiceform.get('samtcdnra').value,

                    csamt: this.gstinvoiceform.get('csamtcdnra').value,

                  }

                }

              ]

            }

          ]

        }

      ],

    }
    console.log(fullObject);

    this.getinvoice = fullObject
    sessionStorage.setItem('gstInNum', this.getinvoice.gstin);
    sessionStorage.setItem('returnPeriod', this.getinvoice.ret_period);

    this.index.saveGstInvoice(fullObject).subscribe(response => {
      this.invoiceres = response;



      console.log(this.invoiceres);


      {
        swal(this.invoiceres.ref_Id, "", "success");
      }

    })


  }
  backClicked(){
    this.router.navigate(['cdnra']); 
  }
}

