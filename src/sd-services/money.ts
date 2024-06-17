// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { EmailOutService } from '../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu from './authentication'; //_splitter_
//append_imports_end
export class money {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'money';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new money(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_money_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: money');
    //appendnew_flow_money_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: money');

    this.app['post'](
      `${this.serviceBasePath}/buy-airtime`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_6mdfSM2ofre2xeVL(bh, parentSpanInst);
          //appendnew_next_sd_60BNLbiIpUVayAY8
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_60BNLbiIpUVayAY8');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/buy-electricity`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_US6fzZ3MTlO35CxO(bh, parentSpanInst);
          //appendnew_next_sd_km6pcIJHHjl4EtKi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_km6pcIJHHjl4EtKi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/send-money`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_PcL1SOCo3VWgYpJM(bh, parentSpanInst);
          //appendnew_next_sd_xIBhpWD43UbWeZRC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xIBhpWD43UbWeZRC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-loan`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_a3GLXtWfgmhnkp6C(bh, parentSpanInst);
          //appendnew_next_sd_1CzkgzcP8319IxLr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1CzkgzcP8319IxLr');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-loans`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_YipzuufjTxx4VnN2(bh, parentSpanInst);
          //appendnew_next_sd_3OviGai5r5P8bsS9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3OviGai5r5P8bsS9');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-electricity`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_CiIL3tc2dQmojqMa(bh, parentSpanInst);
          //appendnew_next_sd_1jZLDEYQFXU9lMyU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1jZLDEYQFXU9lMyU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-transfers`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_vEhXYAGcb5qIAlt0(bh, parentSpanInst);
          //appendnew_next_sd_DEGzgdDizNJP1sry
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DEGzgdDizNJP1sry');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-beneficiary`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'C:\\Users\\User\\Desktop\\capitec-app\\src\\assets\\uploads'.replace(
          /\\|\//g,
          sep
        ),
        options: [{ name: 'ID', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.filter(bh, parentSpanInst);
          //appendnew_next_sd_0GLKUm8ZfkhouX9A
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0GLKUm8ZfkhouX9A');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-loan`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_0I0V6wpec5QQqAOF(bh, parentSpanInst);
          //appendnew_next_sd_NIRNgGgnpquOO6nM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_NIRNgGgnpquOO6nM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-beneficiary-money`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Pc9ES0NNI9DYOQZL(bh, parentSpanInst);
          //appendnew_next_sd_zhLzgy3rkdvq3Ugo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zhLzgy3rkdvq3Ugo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-beneficiary-electricity`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'C:\\Users\\User\\Desktop\\capitec-app\\src\\assets\\uploads'.replace(
          /\\|\//g,
          sep
        ),
        options: [{ name: 'ID', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.filterElectricity(bh, parentSpanInst);
          //appendnew_next_sd_pgHCjAvi3BYkVBCW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pgHCjAvi3BYkVBCW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-beneficiary-airtime`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'C:\\Users\\User\\Desktop\\capitec-app\\src\\assets\\uploads'.replace(
          /\\|\//g,
          sep
        ),
        options: [{ name: 'ID', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.filterAirtime(bh, parentSpanInst);
          //appendnew_next_sd_M2CoA82pKhYgdUAh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_M2CoA82pKhYgdUAh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-beneficiary-money`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'C:\\Users\\User\\Desktop\\capitec-app\\src\\assets\\uploads'.replace(
          /\\|\//g,
          sep
        ),
        options: [{ name: 'ID', maxCount: 1 }],
      }),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.filterElectricityMoney(bh, parentSpanInst);
          //appendnew_next_sd_GBTeHr8fgzDZQ5Ym
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GBTeHr8fgzDZQ5Ym');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-beneficiary-airtime`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_25PAiAXqFm62q14J(bh, parentSpanInst);
          //appendnew_next_sd_b1wO3uBRfmodvakP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_b1wO3uBRfmodvakP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-beneficiary-electricity`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_xiEHCrANfLHAt0J9(bh, parentSpanInst);
          //appendnew_next_sd_zWZ29yaI5P45Vm9a
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zWZ29yaI5P45Vm9a');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-airtime`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_orZPm3KlCQYstssR(bh, parentSpanInst);
          //appendnew_next_sd_TzG1zs8CYVHNZYLz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_TzG1zs8CYVHNZYLz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/scan`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_XegFFHtsBqsPmKA0(bh, parentSpanInst);
          //appendnew_next_sd_GVZQ4PmRxwLuXAkY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GVZQ4PmRxwLuXAkY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/transfer-money`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_AM9QD6TCRTl935RO(bh, parentSpanInst);
          //appendnew_next_sd_r5MI9Y58ylKIBSfS
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_r5MI9Y58ylKIBSfS');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-scanned`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_6Wz63tlmdKaFxWWL(bh, parentSpanInst);
          //appendnew_next_sd_DiBBJBSgf5DwkXsV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DiBBJBSgf5DwkXsV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-payed-ben`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_zSemG4TXyYjFgJif(bh, parentSpanInst);
          //appendnew_next_sd_HCEsrTKp77KQaRh6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HCEsrTKp77KQaRh6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/pay-ben`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_ig9SuqLomkgfrW0X(bh, parentSpanInst);
          //appendnew_next_sd_Zz7qv4yJreEXjD6R
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Zz7qv4yJreEXjD6R');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_money_HttpIn
  }
  //   service flows_money

  async toCheckIfTheUserExists(
    parentSpanInst,
    searchObj: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'toCheckIfTheUserExists',
      parentSpanInst
    );
    let bh: any = {
      input: {
        searchObj,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.mongoDb(bh, parentSpanInst);
      //appendnew_next_toCheckIfTheUserExists
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5mLoRLPxenKmy7OD',
        spanInst,
        'toCheckIfTheUserExists'
      );
    }
  }
  //appendnew_flow_money_start

  async sd_6mdfSM2ofre2xeVL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6mdfSM2ofre2xeVL',
      parentSpanInst
    );
    try {
      bh.buy = {
        collection: 'airtime',
      };

      bh.input.body['_id'] = new Date().getTime();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Sqjhhey5v5mC1c4g(bh, parentSpanInst);
      //appendnew_next_sd_6mdfSM2ofre2xeVL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6mdfSM2ofre2xeVL',
        spanInst,
        'sd_6mdfSM2ofre2xeVL'
      );
    }
  }

  async sd_Sqjhhey5v5mC1c4g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Sqjhhey5v5mC1c4g',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0s92eGXBdE4oUVyu(bh, parentSpanInst);
      //appendnew_next_sd_Sqjhhey5v5mC1c4g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Sqjhhey5v5mC1c4g',
        spanInst,
        'sd_Sqjhhey5v5mC1c4g'
      );
    }
  }

  async sd_0s92eGXBdE4oUVyu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0s92eGXBdE4oUVyu',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.buy.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MXd1zA6Ck1ZWmlN9(bh, parentSpanInst);
      //appendnew_next_sd_0s92eGXBdE4oUVyu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0s92eGXBdE4oUVyu',
        spanInst,
        'sd_0s92eGXBdE4oUVyu'
      );
    }
  }

  async sd_MXd1zA6Ck1ZWmlN9(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MXd1zA6Ck1ZWmlN9');
    }
  }

  async sd_US6fzZ3MTlO35CxO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_US6fzZ3MTlO35CxO',
      parentSpanInst
    );
    try {
      bh.buy = {
        collection: 'electricity',
      };

      bh.input.body['_id'] = new Date().getTime();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Q5g0VYC8xoKeqBrq(bh, parentSpanInst);
      //appendnew_next_sd_US6fzZ3MTlO35CxO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_US6fzZ3MTlO35CxO',
        spanInst,
        'sd_US6fzZ3MTlO35CxO'
      );
    }
  }

  async sd_Q5g0VYC8xoKeqBrq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q5g0VYC8xoKeqBrq',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_P3Y1CXHVTwbULE8Q(bh, parentSpanInst);
      //appendnew_next_sd_Q5g0VYC8xoKeqBrq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q5g0VYC8xoKeqBrq',
        spanInst,
        'sd_Q5g0VYC8xoKeqBrq'
      );
    }
  }

  async sd_P3Y1CXHVTwbULE8Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P3Y1CXHVTwbULE8Q',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.buy.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FSQOAtHPn26LsU6M(bh, parentSpanInst);
      //appendnew_next_sd_P3Y1CXHVTwbULE8Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P3Y1CXHVTwbULE8Q',
        spanInst,
        'sd_P3Y1CXHVTwbULE8Q'
      );
    }
  }

  async sd_FSQOAtHPn26LsU6M(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FSQOAtHPn26LsU6M');
    }
  }

  async sd_PcL1SOCo3VWgYpJM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PcL1SOCo3VWgYpJM',
      parentSpanInst
    );
    try {
      bh.send = {
        collection: 'money-transfer',
      };

      bh.input.body['_id'] = new Date().getTime();
      bh.input.body['moneyIn'] = 'payment received';
      bh.input.body['moneyOut'] = 'fees';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Pw4KZCHOFtLfdzC8(bh, parentSpanInst);
      //appendnew_next_sd_PcL1SOCo3VWgYpJM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PcL1SOCo3VWgYpJM',
        spanInst,
        'sd_PcL1SOCo3VWgYpJM'
      );
    }
  }

  async sd_Pw4KZCHOFtLfdzC8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pw4KZCHOFtLfdzC8',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FbGwYvflgdBIgxUj(bh, parentSpanInst);
      //appendnew_next_sd_Pw4KZCHOFtLfdzC8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pw4KZCHOFtLfdzC8',
        spanInst,
        'sd_Pw4KZCHOFtLfdzC8'
      );
    }
  }

  async sd_FbGwYvflgdBIgxUj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FbGwYvflgdBIgxUj',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.send.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HCz1A9OJzavy4llZ(bh, parentSpanInst);
      //appendnew_next_sd_FbGwYvflgdBIgxUj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FbGwYvflgdBIgxUj',
        spanInst,
        'sd_FbGwYvflgdBIgxUj'
      );
    }
  }

  async sd_HCz1A9OJzavy4llZ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HCz1A9OJzavy4llZ');
    }
  }

  async sd_a3GLXtWfgmhnkp6C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a3GLXtWfgmhnkp6C',
      parentSpanInst
    );
    try {
      bh.send = {
        collection: 'loans',
      };

      bh.input.body['_id'] = new Date().getTime();
      // bh.input.body['status'] = "pending"
      bh.input.body['status'] = 'pending';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ihonYKFe0Arb8V2X(bh, parentSpanInst);
      //appendnew_next_sd_a3GLXtWfgmhnkp6C
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a3GLXtWfgmhnkp6C',
        spanInst,
        'sd_a3GLXtWfgmhnkp6C'
      );
    }
  }

  async sd_ihonYKFe0Arb8V2X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ihonYKFe0Arb8V2X',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.input.body['status'] = 'pending';
      console.log('this is the body', bh.input.body);

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NP41EUmvntzAzFY1(bh, parentSpanInst);
      //appendnew_next_sd_ihonYKFe0Arb8V2X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ihonYKFe0Arb8V2X',
        spanInst,
        'sd_ihonYKFe0Arb8V2X'
      );
    }
  }

  async sd_NP41EUmvntzAzFY1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NP41EUmvntzAzFY1',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.send.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_mbhENd6X7IKiPJAt(bh, parentSpanInst);
      //appendnew_next_sd_NP41EUmvntzAzFY1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NP41EUmvntzAzFY1',
        spanInst,
        'sd_NP41EUmvntzAzFY1'
      );
    }
  }

  async sd_mbhENd6X7IKiPJAt(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mbhENd6X7IKiPJAt');
    }
  }

  async sd_YipzuufjTxx4VnN2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YipzuufjTxx4VnN2',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'loans',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_i0RPlQBKjEkLTRQX(bh, parentSpanInst);
      //appendnew_next_sd_YipzuufjTxx4VnN2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YipzuufjTxx4VnN2',
        spanInst,
        'sd_YipzuufjTxx4VnN2'
      );
    }
  }

  async sd_i0RPlQBKjEkLTRQX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i0RPlQBKjEkLTRQX',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eAczU2y4dCAH1VRy(bh, parentSpanInst);
      //appendnew_next_sd_i0RPlQBKjEkLTRQX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i0RPlQBKjEkLTRQX',
        spanInst,
        'sd_i0RPlQBKjEkLTRQX'
      );
    }
  }

  async sd_eAczU2y4dCAH1VRy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eAczU2y4dCAH1VRy',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.success(bh, parentSpanInst);
      } else {
        bh = await this.notFound(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eAczU2y4dCAH1VRy',
        spanInst,
        'sd_eAczU2y4dCAH1VRy'
      );
    }
  }

  async success(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('success', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_plmM1gpstsznqClp(bh, parentSpanInst);
      //appendnew_next_success
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vPGWB5yrPQsZM1aj',
        spanInst,
        'success'
      );
    }
  }

  async sd_plmM1gpstsznqClp(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_plmM1gpstsznqClp');
    }
  }

  async notFound(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('notFound', parentSpanInst);
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_plmM1gpstsznqClp(bh, parentSpanInst);
      //appendnew_next_notFound
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qXjYM4fxOps0qfRO',
        spanInst,
        'notFound'
      );
    }
  }

  async mongoDb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('mongoDb', parentSpanInst);
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_Kkkscf5YGu1U4UWP',
        bh.input.searchObj.collection,
        bh.input.searchObj.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_mongoDb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Uu80lqbuy1yUpJx2',
        spanInst,
        'mongoDb'
      );
    }
  }

  async sd_CiIL3tc2dQmojqMa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CiIL3tc2dQmojqMa',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'electricity',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0gb53WAfZszAQnM3(bh, parentSpanInst);
      //appendnew_next_sd_CiIL3tc2dQmojqMa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CiIL3tc2dQmojqMa',
        spanInst,
        'sd_CiIL3tc2dQmojqMa'
      );
    }
  }

  async sd_0gb53WAfZszAQnM3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0gb53WAfZszAQnM3',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PJfVuB3NawONkGpe(bh, parentSpanInst);
      //appendnew_next_sd_0gb53WAfZszAQnM3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0gb53WAfZszAQnM3',
        spanInst,
        'sd_0gb53WAfZszAQnM3'
      );
    }
  }

  async sd_PJfVuB3NawONkGpe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PJfVuB3NawONkGpe',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.good(bh, parentSpanInst);
      } else {
        bh = await this.bad(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PJfVuB3NawONkGpe',
        spanInst,
        'sd_PJfVuB3NawONkGpe'
      );
    }
  }

  async good(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('good', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_vxbTMeU5kM3dc30W(bh, parentSpanInst);
      //appendnew_next_good
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BzvGgfRwpIs26TPW',
        spanInst,
        'good'
      );
    }
  }

  async sd_vxbTMeU5kM3dc30W(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vxbTMeU5kM3dc30W');
    }
  }

  async bad(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('bad', parentSpanInst);
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_vxbTMeU5kM3dc30W(bh, parentSpanInst);
      //appendnew_next_bad
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UnwJb79UoxRi9cYA',
        spanInst,
        'bad'
      );
    }
  }

  async sd_vEhXYAGcb5qIAlt0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vEhXYAGcb5qIAlt0',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'money-transfer',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_IFqDVGrMoiNp0Qb2(bh, parentSpanInst);
      //appendnew_next_sd_vEhXYAGcb5qIAlt0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vEhXYAGcb5qIAlt0',
        spanInst,
        'sd_vEhXYAGcb5qIAlt0'
      );
    }
  }

  async sd_IFqDVGrMoiNp0Qb2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IFqDVGrMoiNp0Qb2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7ShMFUgkM4DAroxb(bh, parentSpanInst);
      //appendnew_next_sd_IFqDVGrMoiNp0Qb2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IFqDVGrMoiNp0Qb2',
        spanInst,
        'sd_IFqDVGrMoiNp0Qb2'
      );
    }
  }

  async sd_7ShMFUgkM4DAroxb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7ShMFUgkM4DAroxb',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.successful(bh, parentSpanInst);
      } else {
        bh = await this.notFoundd(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7ShMFUgkM4DAroxb',
        spanInst,
        'sd_7ShMFUgkM4DAroxb'
      );
    }
  }

  async successful(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'successful',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ITukTAIaNdn8jJPO(bh, parentSpanInst);
      //appendnew_next_successful
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Qq1E01G0uBHpC8vq',
        spanInst,
        'successful'
      );
    }
  }

  async sd_ITukTAIaNdn8jJPO(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ITukTAIaNdn8jJPO');
    }
  }

  async notFoundd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('notFoundd', parentSpanInst);
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ITukTAIaNdn8jJPO(bh, parentSpanInst);
      //appendnew_next_notFoundd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3Yz6l7wqFjiXA13O',
        spanInst,
        'notFoundd'
      );
    }
  }

  async filter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('filter', parentSpanInst);
    try {
      bh.collection = 'beneficiary';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LSJJuPfYqSoKZPNc(bh, parentSpanInst);
      //appendnew_next_filter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zaF6MFIxG1hVBl7n',
        spanInst,
        'filter'
      );
    }
  }

  async sd_LSJJuPfYqSoKZPNc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LSJJuPfYqSoKZPNc',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2gtLLw3J82uM7kec(bh, parentSpanInst);
      //appendnew_next_sd_LSJJuPfYqSoKZPNc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LSJJuPfYqSoKZPNc',
        spanInst,
        'sd_LSJJuPfYqSoKZPNc'
      );
    }
  }

  async sd_2gtLLw3J82uM7kec(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2gtLLw3J82uM7kec',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_fwm1cQ8ObrBWhIsJ(bh, parentSpanInst);
      //appendnew_next_sd_2gtLLw3J82uM7kec
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2gtLLw3J82uM7kec',
        spanInst,
        'sd_2gtLLw3J82uM7kec'
      );
    }
  }

  async sd_fwm1cQ8ObrBWhIsJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fwm1cQ8ObrBWhIsJ');
    }
  }

  async sd_0I0V6wpec5QQqAOF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0I0V6wpec5QQqAOF',
      parentSpanInst
    );
    try {
      bh.collection = 'loans';
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };
      console.log(bh.filter);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.s(bh, parentSpanInst);
      //appendnew_next_sd_0I0V6wpec5QQqAOF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0I0V6wpec5QQqAOF',
        spanInst,
        'sd_0I0V6wpec5QQqAOF'
      );
    }
  }

  async s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('s', parentSpanInst);
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body.status,
          'approved',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zJZqk3BeqIWehZcJ(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.body.status,
          'declined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wuWLNdErfn2OH63K(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TL1WpZbn0Tne6gJr',
        spanInst,
        's'
      );
    }
  }

  async sd_zJZqk3BeqIWehZcJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zJZqk3BeqIWehZcJ',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'LOAN APPLICATION SUCCESSFUL',
        from: 'Capitec',
        body: `Your application for a loan been approved.
<center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capitec_Bank_logo.svg/768px-Capitec_Bank_logo.svg.png" width="300px" height="80px"/></center>`,
      };

      bh.status = 200;

      let newCurrentAmount =
        Number(bh.input.body.available_balance) +
        Number(bh.input.body.loanAmount);

      bh.input.body.available_balance = newCurrentAmount;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tsGsEpFuB7luFpWW(bh, parentSpanInst);
      //appendnew_next_sd_zJZqk3BeqIWehZcJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zJZqk3BeqIWehZcJ',
        spanInst,
        'sd_zJZqk3BeqIWehZcJ'
      );
    }
  }

  async sd_tsGsEpFuB7luFpWW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tsGsEpFuB7luFpWW',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RTjPLq74ItKJti3T(bh, parentSpanInst);
      //appendnew_next_sd_tsGsEpFuB7luFpWW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tsGsEpFuB7luFpWW',
        spanInst,
        'sd_tsGsEpFuB7luFpWW'
      );
    }
  }

  async sd_RTjPLq74ItKJti3T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RTjPLq74ItKJti3T',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_bkwqQKmMI8faGDdO'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.input.body.email,
          subject: bh.payload.subject,
          body: bh.payload.body,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: undefined,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gB0zxQ3DbKjqyt6s(bh, parentSpanInst);
      //appendnew_next_sd_RTjPLq74ItKJti3T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RTjPLq74ItKJti3T',
        spanInst,
        'sd_RTjPLq74ItKJti3T'
      );
    }
  }

  async sd_gB0zxQ3DbKjqyt6s(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gB0zxQ3DbKjqyt6s');
    }
  }

  async sd_wuWLNdErfn2OH63K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wuWLNdErfn2OH63K',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: '<b> LOAN UNSUCCESSFUL </b>',
        from: 'Capitec',
        body: `Your application for a loan was not approved.
   ${bh.input.body.rejectionReason}

   <center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capitec_Bank_logo.svg/768px-Capitec_Bank_logo.svg.png" width="300px" height="80px"/>  </center>`,
      };

      console.log('check mfanaka ==>', bh.input.body);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S9LwsnXaQpeNyvJS(bh, parentSpanInst);
      //appendnew_next_sd_wuWLNdErfn2OH63K
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wuWLNdErfn2OH63K',
        spanInst,
        'sd_wuWLNdErfn2OH63K'
      );
    }
  }

  async sd_S9LwsnXaQpeNyvJS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S9LwsnXaQpeNyvJS',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.filter,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iYcnyKlbfshaoPeZ(bh, parentSpanInst);
      //appendnew_next_sd_S9LwsnXaQpeNyvJS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S9LwsnXaQpeNyvJS',
        spanInst,
        'sd_S9LwsnXaQpeNyvJS'
      );
    }
  }

  async sd_iYcnyKlbfshaoPeZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iYcnyKlbfshaoPeZ',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_bkwqQKmMI8faGDdO'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.result = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.input.body.email,
          subject: bh.payload.subject,
          body: undefined,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.body,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_gB0zxQ3DbKjqyt6s(bh, parentSpanInst);
      //appendnew_next_sd_iYcnyKlbfshaoPeZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iYcnyKlbfshaoPeZ',
        spanInst,
        'sd_iYcnyKlbfshaoPeZ'
      );
    }
  }

  async sd_Pc9ES0NNI9DYOQZL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Pc9ES0NNI9DYOQZL',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'beneficiary',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_b4DVNUeCvJJ57jH5(bh, parentSpanInst);
      //appendnew_next_sd_Pc9ES0NNI9DYOQZL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Pc9ES0NNI9DYOQZL',
        spanInst,
        'sd_Pc9ES0NNI9DYOQZL'
      );
    }
  }

  async sd_b4DVNUeCvJJ57jH5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_b4DVNUeCvJJ57jH5',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FpVgakpDf5bqZqPJ(bh, parentSpanInst);
      //appendnew_next_sd_b4DVNUeCvJJ57jH5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_b4DVNUeCvJJ57jH5',
        spanInst,
        'sd_b4DVNUeCvJJ57jH5'
      );
    }
  }

  async sd_FpVgakpDf5bqZqPJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FpVgakpDf5bqZqPJ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.succes(bh, parentSpanInst);
      } else {
        bh = await this.notFoun(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FpVgakpDf5bqZqPJ',
        spanInst,
        'sd_FpVgakpDf5bqZqPJ'
      );
    }
  }

  async succes(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('succes', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1nWZcrc7Mr2GrDcE(bh, parentSpanInst);
      //appendnew_next_succes
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1PpVFB5QuVO0Q3lJ',
        spanInst,
        'succes'
      );
    }
  }

  async sd_1nWZcrc7Mr2GrDcE(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1nWZcrc7Mr2GrDcE');
    }
  }

  async notFoun(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('notFoun', parentSpanInst);
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_1nWZcrc7Mr2GrDcE(bh, parentSpanInst);
      //appendnew_next_notFoun
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DZK2EZp5v308uF50',
        spanInst,
        'notFoun'
      );
    }
  }

  async filterElectricity(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'filterElectricity',
      parentSpanInst
    );
    try {
      bh.collection = 'beneficiary-electricity';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5xnXt6jezK3MmVvA(bh, parentSpanInst);
      //appendnew_next_filterElectricity
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zjrMOpGBu6CVDJMU',
        spanInst,
        'filterElectricity'
      );
    }
  }

  async sd_5xnXt6jezK3MmVvA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5xnXt6jezK3MmVvA',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Rg8FTozR98T11yMt(bh, parentSpanInst);
      //appendnew_next_sd_5xnXt6jezK3MmVvA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5xnXt6jezK3MmVvA',
        spanInst,
        'sd_5xnXt6jezK3MmVvA'
      );
    }
  }

  async sd_Rg8FTozR98T11yMt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Rg8FTozR98T11yMt',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_45UQRk2CIMFitYks(bh, parentSpanInst);
      //appendnew_next_sd_Rg8FTozR98T11yMt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Rg8FTozR98T11yMt',
        spanInst,
        'sd_Rg8FTozR98T11yMt'
      );
    }
  }

  async sd_45UQRk2CIMFitYks(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_45UQRk2CIMFitYks');
    }
  }

  async filterAirtime(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'filterAirtime',
      parentSpanInst
    );
    try {
      bh.collection = 'beneficiary-airtime';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JfjbeT9wxKxStfwl(bh, parentSpanInst);
      //appendnew_next_filterAirtime
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1K8U3sRyh8cDJYwM',
        spanInst,
        'filterAirtime'
      );
    }
  }

  async sd_JfjbeT9wxKxStfwl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JfjbeT9wxKxStfwl',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dXL1k2SX9n4HDCXH(bh, parentSpanInst);
      //appendnew_next_sd_JfjbeT9wxKxStfwl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JfjbeT9wxKxStfwl',
        spanInst,
        'sd_JfjbeT9wxKxStfwl'
      );
    }
  }

  async sd_dXL1k2SX9n4HDCXH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dXL1k2SX9n4HDCXH',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HVKfdjgli9qHCP1e(bh, parentSpanInst);
      //appendnew_next_sd_dXL1k2SX9n4HDCXH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dXL1k2SX9n4HDCXH',
        spanInst,
        'sd_dXL1k2SX9n4HDCXH'
      );
    }
  }

  async sd_HVKfdjgli9qHCP1e(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HVKfdjgli9qHCP1e');
    }
  }

  async filterElectricityMoney(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'filterElectricityMoney',
      parentSpanInst
    );
    try {
      bh.collection = 'beneficiary-money';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_djZhWX8w8ksomFwy(bh, parentSpanInst);
      //appendnew_next_filterElectricityMoney
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YxtS3NP9gMdSWyhn',
        spanInst,
        'filterElectricityMoney'
      );
    }
  }

  async sd_djZhWX8w8ksomFwy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_djZhWX8w8ksomFwy',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SUY3WTxmMDqfT5h6(bh, parentSpanInst);
      //appendnew_next_sd_djZhWX8w8ksomFwy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_djZhWX8w8ksomFwy',
        spanInst,
        'sd_djZhWX8w8ksomFwy'
      );
    }
  }

  async sd_SUY3WTxmMDqfT5h6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SUY3WTxmMDqfT5h6',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_b9vqyujQRfV87uyi(bh, parentSpanInst);
      //appendnew_next_sd_SUY3WTxmMDqfT5h6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SUY3WTxmMDqfT5h6',
        spanInst,
        'sd_SUY3WTxmMDqfT5h6'
      );
    }
  }

  async sd_b9vqyujQRfV87uyi(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b9vqyujQRfV87uyi');
    }
  }

  async sd_25PAiAXqFm62q14J(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_25PAiAXqFm62q14J',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'beneficiary-airtime',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HxgprNJOxyVLvIAf(bh, parentSpanInst);
      //appendnew_next_sd_25PAiAXqFm62q14J
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_25PAiAXqFm62q14J',
        spanInst,
        'sd_25PAiAXqFm62q14J'
      );
    }
  }

  async sd_HxgprNJOxyVLvIAf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HxgprNJOxyVLvIAf',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1h7zG2Fgh77yAA2I(bh, parentSpanInst);
      //appendnew_next_sd_HxgprNJOxyVLvIAf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HxgprNJOxyVLvIAf',
        spanInst,
        'sd_HxgprNJOxyVLvIAf'
      );
    }
  }

  async sd_1h7zG2Fgh77yAA2I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1h7zG2Fgh77yAA2I',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_DMAkjZqEStPIenoC(bh, parentSpanInst);
      } else {
        bh = await this.sd_O91RDaBbJOFG4pOQ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1h7zG2Fgh77yAA2I',
        spanInst,
        'sd_1h7zG2Fgh77yAA2I'
      );
    }
  }

  async sd_DMAkjZqEStPIenoC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DMAkjZqEStPIenoC',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KifReum1fHR110gl(bh, parentSpanInst);
      //appendnew_next_sd_DMAkjZqEStPIenoC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DMAkjZqEStPIenoC',
        spanInst,
        'sd_DMAkjZqEStPIenoC'
      );
    }
  }

  async sd_KifReum1fHR110gl(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KifReum1fHR110gl');
    }
  }

  async sd_O91RDaBbJOFG4pOQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_O91RDaBbJOFG4pOQ',
      parentSpanInst
    );
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_KifReum1fHR110gl(bh, parentSpanInst);
      //appendnew_next_sd_O91RDaBbJOFG4pOQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O91RDaBbJOFG4pOQ',
        spanInst,
        'sd_O91RDaBbJOFG4pOQ'
      );
    }
  }

  async sd_xiEHCrANfLHAt0J9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xiEHCrANfLHAt0J9',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'beneficiary-electricity',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4hLEYvjPAniM5ct0(bh, parentSpanInst);
      //appendnew_next_sd_xiEHCrANfLHAt0J9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xiEHCrANfLHAt0J9',
        spanInst,
        'sd_xiEHCrANfLHAt0J9'
      );
    }
  }

  async sd_4hLEYvjPAniM5ct0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4hLEYvjPAniM5ct0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UW8ywBMerKCdkePp(bh, parentSpanInst);
      //appendnew_next_sd_4hLEYvjPAniM5ct0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4hLEYvjPAniM5ct0',
        spanInst,
        'sd_4hLEYvjPAniM5ct0'
      );
    }
  }

  async sd_UW8ywBMerKCdkePp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UW8ywBMerKCdkePp',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QrtKIKlL39OA9SMM(bh, parentSpanInst);
      } else {
        bh = await this.sd_1y2gvVn3KdlbRiNn(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UW8ywBMerKCdkePp',
        spanInst,
        'sd_UW8ywBMerKCdkePp'
      );
    }
  }

  async sd_QrtKIKlL39OA9SMM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QrtKIKlL39OA9SMM',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5S4vIfZGRd7lBAGK(bh, parentSpanInst);
      //appendnew_next_sd_QrtKIKlL39OA9SMM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QrtKIKlL39OA9SMM',
        spanInst,
        'sd_QrtKIKlL39OA9SMM'
      );
    }
  }

  async sd_5S4vIfZGRd7lBAGK(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5S4vIfZGRd7lBAGK');
    }
  }

  async sd_1y2gvVn3KdlbRiNn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1y2gvVn3KdlbRiNn',
      parentSpanInst
    );
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_5S4vIfZGRd7lBAGK(bh, parentSpanInst);
      //appendnew_next_sd_1y2gvVn3KdlbRiNn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1y2gvVn3KdlbRiNn',
        spanInst,
        'sd_1y2gvVn3KdlbRiNn'
      );
    }
  }

  async sd_orZPm3KlCQYstssR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_orZPm3KlCQYstssR',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'airtime',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TpfeBAmraAokIIiE(bh, parentSpanInst);
      //appendnew_next_sd_orZPm3KlCQYstssR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_orZPm3KlCQYstssR',
        spanInst,
        'sd_orZPm3KlCQYstssR'
      );
    }
  }

  async sd_TpfeBAmraAokIIiE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TpfeBAmraAokIIiE',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JnkwC6IJ6HZAVtsJ(bh, parentSpanInst);
      //appendnew_next_sd_TpfeBAmraAokIIiE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TpfeBAmraAokIIiE',
        spanInst,
        'sd_TpfeBAmraAokIIiE'
      );
    }
  }

  async sd_JnkwC6IJ6HZAVtsJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JnkwC6IJ6HZAVtsJ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ZT4ewNodSB225r1F(bh, parentSpanInst);
      } else {
        bh = await this.sd_vHbTXvjcu9SYgHVc(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JnkwC6IJ6HZAVtsJ',
        spanInst,
        'sd_JnkwC6IJ6HZAVtsJ'
      );
    }
  }

  async sd_ZT4ewNodSB225r1F(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZT4ewNodSB225r1F',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_nutfCUsCy7U81HUF(bh, parentSpanInst);
      //appendnew_next_sd_ZT4ewNodSB225r1F
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZT4ewNodSB225r1F',
        spanInst,
        'sd_ZT4ewNodSB225r1F'
      );
    }
  }

  async sd_nutfCUsCy7U81HUF(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nutfCUsCy7U81HUF');
    }
  }

  async sd_vHbTXvjcu9SYgHVc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vHbTXvjcu9SYgHVc',
      parentSpanInst
    );
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_nutfCUsCy7U81HUF(bh, parentSpanInst);
      //appendnew_next_sd_vHbTXvjcu9SYgHVc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vHbTXvjcu9SYgHVc',
        spanInst,
        'sd_vHbTXvjcu9SYgHVc'
      );
    }
  }

  async sd_XegFFHtsBqsPmKA0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XegFFHtsBqsPmKA0',
      parentSpanInst
    );
    try {
      bh.collection = 'scan_to_pay';

      bh.input.body['_id'] = new Date().getTime();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KyAc7Kw6p9Y36sXA(bh, parentSpanInst);
      //appendnew_next_sd_XegFFHtsBqsPmKA0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XegFFHtsBqsPmKA0',
        spanInst,
        'sd_XegFFHtsBqsPmKA0'
      );
    }
  }

  async sd_KyAc7Kw6p9Y36sXA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KyAc7Kw6p9Y36sXA',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gyAOGAH4pYBTojrV(bh, parentSpanInst);
      //appendnew_next_sd_KyAc7Kw6p9Y36sXA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KyAc7Kw6p9Y36sXA',
        spanInst,
        'sd_KyAc7Kw6p9Y36sXA'
      );
    }
  }

  async sd_gyAOGAH4pYBTojrV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gyAOGAH4pYBTojrV',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Bm44WtjMwggpLYcK(bh, parentSpanInst);
      //appendnew_next_sd_gyAOGAH4pYBTojrV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gyAOGAH4pYBTojrV',
        spanInst,
        'sd_gyAOGAH4pYBTojrV'
      );
    }
  }

  async sd_Bm44WtjMwggpLYcK(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bm44WtjMwggpLYcK');
    }
  }

  async sd_AM9QD6TCRTl935RO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AM9QD6TCRTl935RO',
      parentSpanInst
    );
    try {
      bh.collection = 'money-transfer';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_j6XLqn3LnlckrL62(bh, parentSpanInst);
      //appendnew_next_sd_AM9QD6TCRTl935RO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AM9QD6TCRTl935RO',
        spanInst,
        'sd_AM9QD6TCRTl935RO'
      );
    }
  }

  async sd_j6XLqn3LnlckrL62(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_j6XLqn3LnlckrL62',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PVLsQ10rZIgly2eI(bh, parentSpanInst);
      //appendnew_next_sd_j6XLqn3LnlckrL62
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_j6XLqn3LnlckrL62',
        spanInst,
        'sd_j6XLqn3LnlckrL62'
      );
    }
  }

  async sd_PVLsQ10rZIgly2eI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PVLsQ10rZIgly2eI',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dFepQ9t8z71IYCUM(bh, parentSpanInst);
      //appendnew_next_sd_PVLsQ10rZIgly2eI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PVLsQ10rZIgly2eI',
        spanInst,
        'sd_PVLsQ10rZIgly2eI'
      );
    }
  }

  async sd_dFepQ9t8z71IYCUM(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dFepQ9t8z71IYCUM');
    }
  }

  async sd_6Wz63tlmdKaFxWWL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6Wz63tlmdKaFxWWL',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'scan_to_pay',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oWtXxh6a3vHGEctJ(bh, parentSpanInst);
      //appendnew_next_sd_6Wz63tlmdKaFxWWL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6Wz63tlmdKaFxWWL',
        spanInst,
        'sd_6Wz63tlmdKaFxWWL'
      );
    }
  }

  async sd_oWtXxh6a3vHGEctJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oWtXxh6a3vHGEctJ',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jKgnzh66EoLTHght(bh, parentSpanInst);
      //appendnew_next_sd_oWtXxh6a3vHGEctJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oWtXxh6a3vHGEctJ',
        spanInst,
        'sd_oWtXxh6a3vHGEctJ'
      );
    }
  }

  async sd_jKgnzh66EoLTHght(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jKgnzh66EoLTHght',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_79A2RBDzeN3U5Syf(bh, parentSpanInst);
      } else {
        bh = await this.sd_AvgfGvDAFufHh10G(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jKgnzh66EoLTHght',
        spanInst,
        'sd_jKgnzh66EoLTHght'
      );
    }
  }

  async sd_79A2RBDzeN3U5Syf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_79A2RBDzeN3U5Syf',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MCdEpbqX9bTToSEv(bh, parentSpanInst);
      //appendnew_next_sd_79A2RBDzeN3U5Syf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_79A2RBDzeN3U5Syf',
        spanInst,
        'sd_79A2RBDzeN3U5Syf'
      );
    }
  }

  async sd_MCdEpbqX9bTToSEv(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MCdEpbqX9bTToSEv');
    }
  }

  async sd_AvgfGvDAFufHh10G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AvgfGvDAFufHh10G',
      parentSpanInst
    );
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_MCdEpbqX9bTToSEv(bh, parentSpanInst);
      //appendnew_next_sd_AvgfGvDAFufHh10G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AvgfGvDAFufHh10G',
        spanInst,
        'sd_AvgfGvDAFufHh10G'
      );
    }
  }

  async sd_zSemG4TXyYjFgJif(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zSemG4TXyYjFgJif',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'payed-ben',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_L0AdJpAl70M2BFSq(bh, parentSpanInst);
      //appendnew_next_sd_zSemG4TXyYjFgJif
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zSemG4TXyYjFgJif',
        spanInst,
        'sd_zSemG4TXyYjFgJif'
      );
    }
  }

  async sd_L0AdJpAl70M2BFSq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L0AdJpAl70M2BFSq',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance: SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication =
        SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu.authentication.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXuInstance.toCheckIfTheUserExists(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Oe5kXCJsxYz1Qf60(bh, parentSpanInst);
      //appendnew_next_sd_L0AdJpAl70M2BFSq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L0AdJpAl70M2BFSq',
        spanInst,
        'sd_L0AdJpAl70M2BFSq'
      );
    }
  }

  async sd_Oe5kXCJsxYz1Qf60(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Oe5kXCJsxYz1Qf60',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_q9iqbwRexyP0ikgF(bh, parentSpanInst);
      } else {
        bh = await this.sd_G1kO5hbPTnfDpZ8z(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Oe5kXCJsxYz1Qf60',
        spanInst,
        'sd_Oe5kXCJsxYz1Qf60'
      );
    }
  }

  async sd_q9iqbwRexyP0ikgF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_q9iqbwRexyP0ikgF',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RAl7HAsPUKdbiMm2(bh, parentSpanInst);
      //appendnew_next_sd_q9iqbwRexyP0ikgF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q9iqbwRexyP0ikgF',
        spanInst,
        'sd_q9iqbwRexyP0ikgF'
      );
    }
  }

  async sd_RAl7HAsPUKdbiMm2(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RAl7HAsPUKdbiMm2');
    }
  }

  async sd_G1kO5hbPTnfDpZ8z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G1kO5hbPTnfDpZ8z',
      parentSpanInst
    );
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_RAl7HAsPUKdbiMm2(bh, parentSpanInst);
      //appendnew_next_sd_G1kO5hbPTnfDpZ8z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G1kO5hbPTnfDpZ8z',
        spanInst,
        'sd_G1kO5hbPTnfDpZ8z'
      );
    }
  }

  async sd_ig9SuqLomkgfrW0X(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ig9SuqLomkgfrW0X',
      parentSpanInst
    );
    try {
      bh.send = {
        collection: 'payed-ben',
      };

      bh.input.body['_id'] = new Date().getTime();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zNM46H5cpn6A1o3Z(bh, parentSpanInst);
      //appendnew_next_sd_ig9SuqLomkgfrW0X
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ig9SuqLomkgfrW0X',
        spanInst,
        'sd_ig9SuqLomkgfrW0X'
      );
    }
  }

  async sd_zNM46H5cpn6A1o3Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zNM46H5cpn6A1o3Z',
      parentSpanInst
    );
    try {
      bh.status = 200;

      delete bh.input.body['collection'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BMSXm5trJv7zdYnV(bh, parentSpanInst);
      //appendnew_next_sd_zNM46H5cpn6A1o3Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zNM46H5cpn6A1o3Z',
        spanInst,
        'sd_zNM46H5cpn6A1o3Z'
      );
    }
  }

  async sd_BMSXm5trJv7zdYnV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BMSXm5trJv7zdYnV',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.send.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_M2RawqFatISQmec0(bh, parentSpanInst);
      //appendnew_next_sd_BMSXm5trJv7zdYnV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BMSXm5trJv7zdYnV',
        spanInst,
        'sd_BMSXm5trJv7zdYnV'
      );
    }
  }

  async sd_M2RawqFatISQmec0(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_M2RawqFatISQmec0');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_money_Catch
}
