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
//append_imports_end
export class authentication {
  public accountNumber: any;
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
    this.serviceName = 'authentication';
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
      instance = new authentication(
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
    //appendnew_flow_authentication_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: authentication');
    //appendnew_flow_authentication_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: authentication');

    this.app['put'](
      `${this.serviceBasePath}/update`,
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
          bh = await this.sd_IjtqtSWN5xiBQ0Ic(bh, parentSpanInst);
          //appendnew_next_sd_rubhWusWYNNLwPmJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rubhWusWYNNLwPmJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/log-in`,
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
          bh = await this.sd_rvKwoKEgB1QzIF4w(bh, parentSpanInst);
          //appendnew_next_sd_cteWP9hLQoRNHArY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cteWP9hLQoRNHArY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-customers`,
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
          bh = await this.sd_7jc6ulH1Yuoj3AGd(bh, parentSpanInst);
          //appendnew_next_sd_Lp0fZfIMyFSc2g2y
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Lp0fZfIMyFSc2g2y');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/registration`,
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
          //appendnew_next_sd_wNSwJNXL5YZXw945
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wNSwJNXL5YZXw945');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/add-admin`,
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
          bh = await this.sd_24fMBEqRFLUEba5C(bh, parentSpanInst);
          //appendnew_next_sd_rDyQ3CiQZzPAgQUw
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rDyQ3CiQZzPAgQUw');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/admin-log-in`,
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
          bh = await this.sd_rQns6bmCqDtYJRF7(bh, parentSpanInst);
          //appendnew_next_sd_GnRmWMJ9CKwXfT4s
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GnRmWMJ9CKwXfT4s');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-admin`,
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
          bh = await this.sd_J20aydaSlPCQR1LX(bh, parentSpanInst);
          //appendnew_next_sd_7tbBQhVKDFD7qzBH
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7tbBQhVKDFD7qzBH');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete`,
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
          bh = await this.sd_mhe6dRuGGK3uEJCF(bh, parentSpanInst);
          //appendnew_next_sd_nAhUEQR5GV1o7HYM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nAhUEQR5GV1o7HYM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-admin`,
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
          bh = await this.sd_NSfFFW6lQC5q0rMT(bh, parentSpanInst);
          //appendnew_next_sd_F2ndpzV8A4Vlc8JJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_F2ndpzV8A4Vlc8JJ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/admin-forgot`,
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
          bh = await this.sd_DJiCD0OLmbktXr7a(bh, parentSpanInst);
          //appendnew_next_sd_Ccr3eyIeRbMohgPE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ccr3eyIeRbMohgPE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['put'](
      `${this.serviceBasePath}/update-admin-details`,
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
          bh = await this.sd_FjHEtovdIeVGEE0G(bh, parentSpanInst);
          //appendnew_next_sd_J4rsabFAz2mXqcbq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_J4rsabFAz2mXqcbq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-ID`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'name', maxCount: 1 }],
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
          bh = await this.sd_zoBnrC1n4UOpyP1b(bh, parentSpanInst);
          //appendnew_next_sd_H69MzZUSYIMNL9MU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_H69MzZUSYIMNL9MU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/download_ID/:filename`,
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
          bh = await this.sd_GrGNRmpDEj7ARRCh(bh, parentSpanInst);
          //appendnew_next_sd_4uKAVeMv8AKdneOb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4uKAVeMv8AKdneOb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-proof`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'name', maxCount: 1 }],
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
          bh = await this.sd_5SttORk3wI8FbVVm(bh, parentSpanInst);
          //appendnew_next_sd_nDqrn2Uf94UGQG4Y
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nDqrn2Uf94UGQG4Y');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/download-residence/:filename`,
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
          bh = await this.sd_dDght0ZI4yg4M5Xc(bh, parentSpanInst);
          //appendnew_next_sd_vasQvhO1iN879hxb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vasQvhO1iN879hxb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-picture`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'name', maxCount: 1 }],
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
          bh = await this.sd_zbUMTZrJvaBA5Dhl(bh, parentSpanInst);
          //appendnew_next_sd_3ZNcVXESrFcBVOqo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3ZNcVXESrFcBVOqo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/download-picture/:filename`,
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
          bh = await this.sd_MkhvYE10xMiuwHR5(bh, parentSpanInst);
          //appendnew_next_sd_8k31sJEon4xFu8y0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8k31sJEon4xFu8y0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/find-one-user`,
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
          bh = await this.sd_nEj1eKwM8CtiPwrf(bh, parentSpanInst);
          //appendnew_next_sd_rygB3MKlIUFd02XL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rygB3MKlIUFd02XL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_authentication_HttpIn
  }
  //   service flows_authentication

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
        'sd_KjP1tTXY8ubtVYLV',
        spanInst,
        'toCheckIfTheUserExists'
      );
    }
  }
  //appendnew_flow_authentication_start

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
        'sd_o7sY5owLdQDjMSQ7',
        spanInst,
        'mongoDb'
      );
    }
  }

  async sd_IjtqtSWN5xiBQ0Ic(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IjtqtSWN5xiBQ0Ic',
      parentSpanInst
    );
    try {
      bh.collection = 'users';
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2i8wqB0nc7q2mVyx(bh, parentSpanInst);
      //appendnew_next_sd_IjtqtSWN5xiBQ0Ic
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IjtqtSWN5xiBQ0Ic',
        spanInst,
        'sd_IjtqtSWN5xiBQ0Ic'
      );
    }
  }

  async sd_2i8wqB0nc7q2mVyx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2i8wqB0nc7q2mVyx',
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
      await this.sd_xjZB4huFTdG8tYAq(bh, parentSpanInst);
      //appendnew_next_sd_2i8wqB0nc7q2mVyx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2i8wqB0nc7q2mVyx',
        spanInst,
        'sd_2i8wqB0nc7q2mVyx'
      );
    }
  }

  async sd_xjZB4huFTdG8tYAq(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xjZB4huFTdG8tYAq');
    }
  }

  async sd_rvKwoKEgB1QzIF4w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rvKwoKEgB1QzIF4w',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bskLfDBe51HGmAZi(bh, parentSpanInst);
      //appendnew_next_sd_rvKwoKEgB1QzIF4w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rvKwoKEgB1QzIF4w',
        spanInst,
        'sd_rvKwoKEgB1QzIF4w'
      );
    }
  }

  async sd_bskLfDBe51HGmAZi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bskLfDBe51HGmAZi',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tu2uLm6lTUIUENj0(bh, parentSpanInst);
      //appendnew_next_sd_bskLfDBe51HGmAZi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bskLfDBe51HGmAZi',
        spanInst,
        'sd_bskLfDBe51HGmAZi'
      );
    }
  }

  async sd_tu2uLm6lTUIUENj0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tu2uLm6lTUIUENj0',
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
        bh = await this.sd_yxjKVxJREDrZqi8r(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hsFD6grIGlVB3zwi(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tu2uLm6lTUIUENj0',
        spanInst,
        'sd_tu2uLm6lTUIUENj0'
      );
    }
  }

  async sd_yxjKVxJREDrZqi8r(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yxjKVxJREDrZqi8r',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.result = bh.result[0];
      bh.match = await bcrypt.compare(
        bh.input.body.remotePin,
        bh.result.remotePin
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_87NnnBLSMgmN7bvY(bh, parentSpanInst);
      //appendnew_next_sd_yxjKVxJREDrZqi8r
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yxjKVxJREDrZqi8r',
        spanInst,
        'sd_yxjKVxJREDrZqi8r'
      );
    }
  }

  async sd_87NnnBLSMgmN7bvY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_87NnnBLSMgmN7bvY',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_YJDRmwUzjVmTLESq(bh, parentSpanInst);
      } else {
        bh = await this.sd_SHQWq6zK3Ri2AaZR(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_87NnnBLSMgmN7bvY',
        spanInst,
        'sd_87NnnBLSMgmN7bvY'
      );
    }
  }

  async sd_YJDRmwUzjVmTLESq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YJDRmwUzjVmTLESq',
      parentSpanInst
    );
    try {
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pcyOxzVMzk1DjQYV(bh, parentSpanInst);
      //appendnew_next_sd_YJDRmwUzjVmTLESq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YJDRmwUzjVmTLESq',
        spanInst,
        'sd_YJDRmwUzjVmTLESq'
      );
    }
  }

  async sd_pcyOxzVMzk1DjQYV(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pcyOxzVMzk1DjQYV');
    }
  }

  async sd_SHQWq6zK3Ri2AaZR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SHQWq6zK3Ri2AaZR',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: "PASSWORD DON'T MATCH!!",
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pcyOxzVMzk1DjQYV(bh, parentSpanInst);
      //appendnew_next_sd_SHQWq6zK3Ri2AaZR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SHQWq6zK3Ri2AaZR',
        spanInst,
        'sd_SHQWq6zK3Ri2AaZR'
      );
    }
  }

  async sd_hsFD6grIGlVB3zwi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hsFD6grIGlVB3zwi',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: 'INVALID DETAILS!!',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_pcyOxzVMzk1DjQYV(bh, parentSpanInst);
      //appendnew_next_sd_hsFD6grIGlVB3zwi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hsFD6grIGlVB3zwi',
        spanInst,
        'sd_hsFD6grIGlVB3zwi'
      );
    }
  }

  async sd_7jc6ulH1Yuoj3AGd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7jc6ulH1Yuoj3AGd',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zhBOiNCaIPMQ0BzM(bh, parentSpanInst);
      //appendnew_next_sd_7jc6ulH1Yuoj3AGd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7jc6ulH1Yuoj3AGd',
        spanInst,
        'sd_7jc6ulH1Yuoj3AGd'
      );
    }
  }

  async sd_zhBOiNCaIPMQ0BzM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zhBOiNCaIPMQ0BzM',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8ZUcStvKVtctPoan(bh, parentSpanInst);
      //appendnew_next_sd_zhBOiNCaIPMQ0BzM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zhBOiNCaIPMQ0BzM',
        spanInst,
        'sd_zhBOiNCaIPMQ0BzM'
      );
    }
  }

  async sd_8ZUcStvKVtctPoan(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8ZUcStvKVtctPoan',
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
        'sd_8ZUcStvKVtctPoan',
        spanInst,
        'sd_8ZUcStvKVtctPoan'
      );
    }
  }

  async success(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('success', parentSpanInst);
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1ZmxULLNfcKygpjb(bh, parentSpanInst);
      //appendnew_next_success
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iT5AbZG6vda1stQh',
        spanInst,
        'success'
      );
    }
  }

  async sd_1ZmxULLNfcKygpjb(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1ZmxULLNfcKygpjb');
    }
  }

  async notFound(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('notFound', parentSpanInst);
    try {
      bh.status = 400;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_1ZmxULLNfcKygpjb(bh, parentSpanInst);
      //appendnew_next_notFound
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NoSnWYTN89Up8EMh',
        spanInst,
        'notFound'
      );
    }
  }

  async filter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('filter', parentSpanInst);
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.input.body['_id'] = new Date().getTime();
      bh.input.body['status'] = 'pending';
      bh.input.body['available_balance'] = 50;
      bh.input.body['savings_balance'] = 0;
      bh.input.body['cash_withdrawal_limit'] = 500;
      bh.input.body['card_purchases_limit'] = 500;
      bh.input.body['online_scan_to_pay_phone'] = 500;
      bh.input.body['cash_withdrawal_limit_temp'] = 500;
      bh.input.body['card_purchases_limit_temp'] = 500;
      bh.input.body['online_scan_to_pay_phone_temp'] = 500;
      bh.input.body['limit_counter'] = 0;
      bh.input.body['date'] = 'N/A';
      bh.input.body['registered'] = 'true';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_uUIUBZC8TrCWMreT(bh, parentSpanInst);
      //appendnew_next_filter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oQC3wqUeMZ33B9S1',
        spanInst,
        'filter'
      );
    }
  }

  async sd_uUIUBZC8TrCWMreT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uUIUBZC8TrCWMreT',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1r7LuLOJrJSKtErt(bh, parentSpanInst);
      //appendnew_next_sd_uUIUBZC8TrCWMreT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uUIUBZC8TrCWMreT',
        spanInst,
        'sd_uUIUBZC8TrCWMreT'
      );
    }
  }

  async sd_1r7LuLOJrJSKtErt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1r7LuLOJrJSKtErt',
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
        bh = await this.ifError(bh, parentSpanInst);
      } else {
        bh = await this.sd_1PgsBoBZHTxIgHrz(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1r7LuLOJrJSKtErt',
        spanInst,
        'sd_1r7LuLOJrJSKtErt'
      );
    }
  }

  async ifError(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('ifError', parentSpanInst);
    try {
      bh.status = 404;
      bh.result = {
        message: 'USER ALREADY EXISTS!',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_OCnBbcvqOLZSMTj9(bh, parentSpanInst);
      //appendnew_next_ifError
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MGR6Ii6HahxzHhpw',
        spanInst,
        'ifError'
      );
    }
  }

  async sd_OCnBbcvqOLZSMTj9(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OCnBbcvqOLZSMTj9');
    }
  }

  async sd_1PgsBoBZHTxIgHrz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1PgsBoBZHTxIgHrz',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.status = 200;
      bh.collection = bh.input.body.collection;

      delete bh.input.body.collection;
      bh.body = bh.input.body;
      const hashedPassword = await bcrypt.hash(bh.input.body['remotePin'], 10);
      bh.input.body['remotePin'] = hashedPassword;
      console.log(bh.body);
      console.log(bh.input.body);

      console.log('body ==>', bh.result);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FyqgIf0A0W3zujIX(bh, parentSpanInst);
      //appendnew_next_sd_1PgsBoBZHTxIgHrz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1PgsBoBZHTxIgHrz',
        spanInst,
        'sd_1PgsBoBZHTxIgHrz'
      );
    }
  }

  async sd_FyqgIf0A0W3zujIX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FyqgIf0A0W3zujIX',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'REGISTRATION SUCCESSFUL',
        from: 'Capitec',
        image: `
    <p>Your application to bank with Capitec has been sent.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capitec_Bank_logo.svg/768px-Capitec_Bank_logo.svg.png" width="300px" height="80px"/>`,
      };

      bh.input.body['accountNumber'] = bh.accountNo;

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3bnQv8eSzR6JZwQw(bh, parentSpanInst);
      //appendnew_next_sd_FyqgIf0A0W3zujIX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FyqgIf0A0W3zujIX',
        spanInst,
        'sd_FyqgIf0A0W3zujIX'
      );
    }
  }

  async sd_3bnQv8eSzR6JZwQw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3bnQv8eSzR6JZwQw',
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
          body: bh.payload.applicationMessage,
          cc: undefined,
          bcc: undefined,
          from: bh.payload.from,
          html: bh.payload.image,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DqrU3UoLykR5cDTa(bh, parentSpanInst);
      //appendnew_next_sd_3bnQv8eSzR6JZwQw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3bnQv8eSzR6JZwQw',
        spanInst,
        'sd_3bnQv8eSzR6JZwQw'
      );
    }
  }

  async sd_DqrU3UoLykR5cDTa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DqrU3UoLykR5cDTa',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.search.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_OCnBbcvqOLZSMTj9(bh, parentSpanInst);
      //appendnew_next_sd_DqrU3UoLykR5cDTa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DqrU3UoLykR5cDTa',
        spanInst,
        'sd_DqrU3UoLykR5cDTa'
      );
    }
  }

  async sd_24fMBEqRFLUEba5C(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_24fMBEqRFLUEba5C',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'admin',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dPJgeFFA4Xe6A8tt(bh, parentSpanInst);
      //appendnew_next_sd_24fMBEqRFLUEba5C
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_24fMBEqRFLUEba5C',
        spanInst,
        'sd_24fMBEqRFLUEba5C'
      );
    }
  }

  async sd_dPJgeFFA4Xe6A8tt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dPJgeFFA4Xe6A8tt',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_oj7nTpUWTzA25MWu(bh, parentSpanInst);
      //appendnew_next_sd_dPJgeFFA4Xe6A8tt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dPJgeFFA4Xe6A8tt',
        spanInst,
        'sd_dPJgeFFA4Xe6A8tt'
      );
    }
  }

  async sd_oj7nTpUWTzA25MWu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oj7nTpUWTzA25MWu',
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
        bh = await this.sd_6vmcfGndA0blacqC(bh, parentSpanInst);
      } else {
        bh = await this.sd_Ga8IrwSSvEOy4YZv(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oj7nTpUWTzA25MWu',
        spanInst,
        'sd_oj7nTpUWTzA25MWu'
      );
    }
  }

  async sd_6vmcfGndA0blacqC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6vmcfGndA0blacqC',
      parentSpanInst
    );
    try {
      bh.status = 401;
      console.log('admin exists');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_WSbR9ZOsy4Zb7OTg(bh, parentSpanInst);
      //appendnew_next_sd_6vmcfGndA0blacqC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6vmcfGndA0blacqC',
        spanInst,
        'sd_6vmcfGndA0blacqC'
      );
    }
  }

  async sd_WSbR9ZOsy4Zb7OTg(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.input.body);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WSbR9ZOsy4Zb7OTg');
    }
  }

  async sd_Ga8IrwSSvEOy4YZv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ga8IrwSSvEOy4YZv',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.body = bh.input.body;
      const password = '1234';
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('Hashed password', hashedPassword);

      bh.body = {
        email: 'kimberlymnguni@gmail.com',
        password: hashedPassword,
        collection: 'admin',
      };

      bh.body['_id'] = new Date().getTime();

      console.log('DATA OF ADMIN', bh.body);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tGwwFfC8rIMMSpXb(bh, parentSpanInst);
      //appendnew_next_sd_Ga8IrwSSvEOy4YZv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ga8IrwSSvEOy4YZv',
        spanInst,
        'sd_Ga8IrwSSvEOy4YZv'
      );
    }
  }

  async sd_tGwwFfC8rIMMSpXb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tGwwFfC8rIMMSpXb',
      parentSpanInst
    );
    try {
      bh.body = await MongoPersistance.getInstance().insertOne(
        'sd_Kkkscf5YGu1U4UWP',
        bh.search.collection,
        bh.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_WSbR9ZOsy4Zb7OTg(bh, parentSpanInst);
      //appendnew_next_sd_tGwwFfC8rIMMSpXb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tGwwFfC8rIMMSpXb',
        spanInst,
        'sd_tGwwFfC8rIMMSpXb'
      );
    }
  }

  async sd_rQns6bmCqDtYJRF7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rQns6bmCqDtYJRF7',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'admin',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QR4qOfFknjPdlE0G(bh, parentSpanInst);
      //appendnew_next_sd_rQns6bmCqDtYJRF7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rQns6bmCqDtYJRF7',
        spanInst,
        'sd_rQns6bmCqDtYJRF7'
      );
    }
  }

  async sd_QR4qOfFknjPdlE0G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QR4qOfFknjPdlE0G',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SFDFfsQ9TxHjgsbc(bh, parentSpanInst);
      //appendnew_next_sd_QR4qOfFknjPdlE0G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QR4qOfFknjPdlE0G',
        spanInst,
        'sd_QR4qOfFknjPdlE0G'
      );
    }
  }

  async sd_SFDFfsQ9TxHjgsbc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SFDFfsQ9TxHjgsbc',
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
        bh = await this.sd_wjuBiwG2Vg0wiQ0x(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vT1LNiuDsUxgCaQA(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SFDFfsQ9TxHjgsbc',
        spanInst,
        'sd_SFDFfsQ9TxHjgsbc'
      );
    }
  }

  async sd_wjuBiwG2Vg0wiQ0x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wjuBiwG2Vg0wiQ0x',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      bh.result = bh.result[0];
      console.log('res', bh.result);
      bh.match = await bcrypt.compare(
        bh.input.body.password,
        bh.result.password
      );

      console.log('Matching::::', bh.match);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CPi0qPxSbjJRKlZ2(bh, parentSpanInst);
      //appendnew_next_sd_wjuBiwG2Vg0wiQ0x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wjuBiwG2Vg0wiQ0x',
        spanInst,
        'sd_wjuBiwG2Vg0wiQ0x'
      );
    }
  }

  async sd_CPi0qPxSbjJRKlZ2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CPi0qPxSbjJRKlZ2',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.match,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_6pX9i1sykiwVnVc2(bh, parentSpanInst);
      } else {
        bh = await this.sd_3PVUvGnkNT994W8u(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CPi0qPxSbjJRKlZ2',
        spanInst,
        'sd_CPi0qPxSbjJRKlZ2'
      );
    }
  }

  async sd_6pX9i1sykiwVnVc2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6pX9i1sykiwVnVc2',
      parentSpanInst
    );
    try {
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jhfvpJLQq0j8fXSO(bh, parentSpanInst);
      //appendnew_next_sd_6pX9i1sykiwVnVc2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6pX9i1sykiwVnVc2',
        spanInst,
        'sd_6pX9i1sykiwVnVc2'
      );
    }
  }

  async sd_jhfvpJLQq0j8fXSO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jhfvpJLQq0j8fXSO');
    }
  }

  async sd_3PVUvGnkNT994W8u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3PVUvGnkNT994W8u',
      parentSpanInst
    );
    try {
      bh.result = {
        message: "PASSWORD DON'T MATCH!!",
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jhfvpJLQq0j8fXSO(bh, parentSpanInst);
      //appendnew_next_sd_3PVUvGnkNT994W8u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3PVUvGnkNT994W8u',
        spanInst,
        'sd_3PVUvGnkNT994W8u'
      );
    }
  }

  async sd_vT1LNiuDsUxgCaQA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vT1LNiuDsUxgCaQA',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: 'INVALID DETAILS!',
      };

      console.log('Admin dnt exist');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jhfvpJLQq0j8fXSO(bh, parentSpanInst);
      //appendnew_next_sd_vT1LNiuDsUxgCaQA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vT1LNiuDsUxgCaQA',
        spanInst,
        'sd_vT1LNiuDsUxgCaQA'
      );
    }
  }

  async sd_J20aydaSlPCQR1LX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J20aydaSlPCQR1LX',
      parentSpanInst
    );
    try {
      this.accountNumber = bh.accountNumber;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k1W1kSOTd6xxcwVp(bh, parentSpanInst);
      //appendnew_next_sd_J20aydaSlPCQR1LX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J20aydaSlPCQR1LX',
        spanInst,
        'sd_J20aydaSlPCQR1LX'
      );
    }
  }

  async sd_k1W1kSOTd6xxcwVp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k1W1kSOTd6xxcwVp',
      parentSpanInst
    );
    try {
      bh.collection = 'users';
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };

      bh.accountNo = new Date().getTime();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4M8rRkWGCSTdWq2m(bh, parentSpanInst);
      //appendnew_next_sd_k1W1kSOTd6xxcwVp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k1W1kSOTd6xxcwVp',
        spanInst,
        'sd_k1W1kSOTd6xxcwVp'
      );
    }
  }

  async sd_4M8rRkWGCSTdWq2m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4M8rRkWGCSTdWq2m',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body.status,
          'approved',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_33uhtyPmtIE2sl8p(bh, parentSpanInst);
      } else if (
        this.sdService.operators['eq'](
          bh.input.body.status,
          'rejected',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_YUZy02IqT07gy1tn(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4M8rRkWGCSTdWq2m',
        spanInst,
        'sd_4M8rRkWGCSTdWq2m'
      );
    }
  }

  async sd_33uhtyPmtIE2sl8p(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_33uhtyPmtIE2sl8p',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'APPLICATION SUCCESSFUL',
        from: 'Capitec',
        body: `Your application to bank with Capitec has been approved.
Your account number is ${bh.accountNo}

<center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capitec_Bank_logo.svg/768px-Capitec_Bank_logo.svg.png" width="300px" height="80px"/></center>`,
      };

      bh.input.body['accountNumber'] = bh.accountNo;

      console.log(bh.payload);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iEGqdVrO2IrPKZlR(bh, parentSpanInst);
      //appendnew_next_sd_33uhtyPmtIE2sl8p
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_33uhtyPmtIE2sl8p',
        spanInst,
        'sd_33uhtyPmtIE2sl8p'
      );
    }
  }

  async sd_iEGqdVrO2IrPKZlR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iEGqdVrO2IrPKZlR',
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
      bh = await this.sd_Q6O5gIdDjkxbhMdz(bh, parentSpanInst);
      //appendnew_next_sd_iEGqdVrO2IrPKZlR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iEGqdVrO2IrPKZlR',
        spanInst,
        'sd_iEGqdVrO2IrPKZlR'
      );
    }
  }

  async sd_Q6O5gIdDjkxbhMdz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Q6O5gIdDjkxbhMdz',
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
      await this.sd_TcKHIgUtKSz6qmni(bh, parentSpanInst);
      //appendnew_next_sd_Q6O5gIdDjkxbhMdz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q6O5gIdDjkxbhMdz',
        spanInst,
        'sd_Q6O5gIdDjkxbhMdz'
      );
    }
  }

  async sd_TcKHIgUtKSz6qmni(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TcKHIgUtKSz6qmni');
    }
  }

  async sd_YUZy02IqT07gy1tn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YUZy02IqT07gy1tn',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: '<b> REGISTRATION UNSUCCESSFUL </b>',
        from: 'Capitec',
        body: `Your application to bank with Capitec was not approved.
    ${bh.input.body.rejectionReason}
   
   <center><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capitec_Bank_logo.svg/768px-Capitec_Bank_logo.svg.png" width="300px" height="80px"/>  </center>`,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zG9YQRzqT1mvDtoB(bh, parentSpanInst);
      //appendnew_next_sd_YUZy02IqT07gy1tn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YUZy02IqT07gy1tn',
        spanInst,
        'sd_YUZy02IqT07gy1tn'
      );
    }
  }

  async sd_zG9YQRzqT1mvDtoB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zG9YQRzqT1mvDtoB',
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
      bh = await this.sd_SImLNw21YIVEUAms(bh, parentSpanInst);
      //appendnew_next_sd_zG9YQRzqT1mvDtoB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zG9YQRzqT1mvDtoB',
        spanInst,
        'sd_zG9YQRzqT1mvDtoB'
      );
    }
  }

  async sd_SImLNw21YIVEUAms(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SImLNw21YIVEUAms',
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
      await this.sd_TcKHIgUtKSz6qmni(bh, parentSpanInst);
      //appendnew_next_sd_SImLNw21YIVEUAms
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SImLNw21YIVEUAms',
        spanInst,
        'sd_SImLNw21YIVEUAms'
      );
    }
  }

  async sd_mhe6dRuGGK3uEJCF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mhe6dRuGGK3uEJCF',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'users',
      };

      bh.filter = { email: bh.input.body['email'] };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OLUA6D209KtJiSlc(bh, parentSpanInst);
      //appendnew_next_sd_mhe6dRuGGK3uEJCF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mhe6dRuGGK3uEJCF',
        spanInst,
        'sd_mhe6dRuGGK3uEJCF'
      );
    }
  }

  async sd_OLUA6D209KtJiSlc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OLUA6D209KtJiSlc',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sa4x6ewisc0U4fqq(bh, parentSpanInst);
      //appendnew_next_sd_OLUA6D209KtJiSlc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OLUA6D209KtJiSlc',
        spanInst,
        'sd_OLUA6D209KtJiSlc'
      );
    }
  }

  async sd_sa4x6ewisc0U4fqq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sa4x6ewisc0U4fqq',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_Kkkscf5YGu1U4UWP',
        bh.search.collection,
        bh.filter,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YBIuyekp2L72ixYI(bh, parentSpanInst);
      //appendnew_next_sd_sa4x6ewisc0U4fqq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sa4x6ewisc0U4fqq',
        spanInst,
        'sd_sa4x6ewisc0U4fqq'
      );
    }
  }

  async sd_YBIuyekp2L72ixYI(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YBIuyekp2L72ixYI');
    }
  }

  async sd_NSfFFW6lQC5q0rMT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NSfFFW6lQC5q0rMT',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'admin',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iHnF72paKTdIryVk(bh, parentSpanInst);
      //appendnew_next_sd_NSfFFW6lQC5q0rMT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NSfFFW6lQC5q0rMT',
        spanInst,
        'sd_NSfFFW6lQC5q0rMT'
      );
    }
  }

  async sd_iHnF72paKTdIryVk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iHnF72paKTdIryVk',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_L8BtUmbXbiWHCjAA(bh, parentSpanInst);
      //appendnew_next_sd_iHnF72paKTdIryVk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iHnF72paKTdIryVk',
        spanInst,
        'sd_iHnF72paKTdIryVk'
      );
    }
  }

  async sd_L8BtUmbXbiWHCjAA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L8BtUmbXbiWHCjAA',
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
        bh = await this.sd_2BCSbXP44mH4qjf4(bh, parentSpanInst);
      } else {
        bh = await this.sd_blzK0KKVRgHMg014(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L8BtUmbXbiWHCjAA',
        spanInst,
        'sd_L8BtUmbXbiWHCjAA'
      );
    }
  }

  async sd_2BCSbXP44mH4qjf4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2BCSbXP44mH4qjf4',
      parentSpanInst
    );
    try {
      bh.status = 200;
      bh.result = bh.result;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MrHH4LDqzVd2kl1V(bh, parentSpanInst);
      //appendnew_next_sd_2BCSbXP44mH4qjf4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2BCSbXP44mH4qjf4',
        spanInst,
        'sd_2BCSbXP44mH4qjf4'
      );
    }
  }

  async sd_MrHH4LDqzVd2kl1V(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MrHH4LDqzVd2kl1V');
    }
  }

  async sd_blzK0KKVRgHMg014(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_blzK0KKVRgHMg014',
      parentSpanInst
    );
    try {
      if (bh.result) {
        bh.status = 200;
      } else {
        bh.status = 404;
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_MrHH4LDqzVd2kl1V(bh, parentSpanInst);
      //appendnew_next_sd_blzK0KKVRgHMg014
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_blzK0KKVRgHMg014',
        spanInst,
        'sd_blzK0KKVRgHMg014'
      );
    }
  }

  async sd_DJiCD0OLmbktXr7a(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DJiCD0OLmbktXr7a',
      parentSpanInst
    );
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'admin',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AMhvanHlwSHtxCuW(bh, parentSpanInst);
      //appendnew_next_sd_DJiCD0OLmbktXr7a
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DJiCD0OLmbktXr7a',
        spanInst,
        'sd_DJiCD0OLmbktXr7a'
      );
    }
  }

  async sd_AMhvanHlwSHtxCuW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AMhvanHlwSHtxCuW',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HdJEFqsD96WnjrOJ(bh, parentSpanInst);
      //appendnew_next_sd_AMhvanHlwSHtxCuW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AMhvanHlwSHtxCuW',
        spanInst,
        'sd_AMhvanHlwSHtxCuW'
      );
    }
  }

  async sd_HdJEFqsD96WnjrOJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HdJEFqsD96WnjrOJ',
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
        bh = await this.sd_KNNBuEkTGeBKqvPG(bh, parentSpanInst);
      } else {
        bh = await this.sd_8AAtiqOuCVbM50J4(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HdJEFqsD96WnjrOJ',
        spanInst,
        'sd_HdJEFqsD96WnjrOJ'
      );
    }
  }

  async sd_KNNBuEkTGeBKqvPG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KNNBuEkTGeBKqvPG',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'Verification Code',
        from: 'Capitec',
        body: `Here is your verification code ${bh.input.body.code}`,
      };

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JMW6OAG8URSslbPS(bh, parentSpanInst);
      //appendnew_next_sd_KNNBuEkTGeBKqvPG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KNNBuEkTGeBKqvPG',
        spanInst,
        'sd_KNNBuEkTGeBKqvPG'
      );
    }
  }

  async sd_JMW6OAG8URSslbPS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JMW6OAG8URSslbPS',
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
          to: bh.payload.to,
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
      await this.sd_XxceEDZ2WugwuKJB(bh, parentSpanInst);
      //appendnew_next_sd_JMW6OAG8URSslbPS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JMW6OAG8URSslbPS',
        spanInst,
        'sd_JMW6OAG8URSslbPS'
      );
    }
  }

  async sd_XxceEDZ2WugwuKJB(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XxceEDZ2WugwuKJB');
    }
  }

  async sd_8AAtiqOuCVbM50J4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8AAtiqOuCVbM50J4',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: 'User not found!',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XxceEDZ2WugwuKJB(bh, parentSpanInst);
      //appendnew_next_sd_8AAtiqOuCVbM50J4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8AAtiqOuCVbM50J4',
        spanInst,
        'sd_8AAtiqOuCVbM50J4'
      );
    }
  }

  async sd_FjHEtovdIeVGEE0G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FjHEtovdIeVGEE0G',
      parentSpanInst
    );
    try {
      bh.collection = 'admin';
      bh.filter = { email: bh.input.body['email'] };

      delete bh.input.body.collection;

      bh.body = { $set: bh.input.body };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9wuSKUFh6hzu2k73(bh, parentSpanInst);
      //appendnew_next_sd_FjHEtovdIeVGEE0G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FjHEtovdIeVGEE0G',
        spanInst,
        'sd_FjHEtovdIeVGEE0G'
      );
    }
  }

  async sd_9wuSKUFh6hzu2k73(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9wuSKUFh6hzu2k73',
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
      await this.sd_lrT7M5q2CbxSEsoI(bh, parentSpanInst);
      //appendnew_next_sd_9wuSKUFh6hzu2k73
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9wuSKUFh6hzu2k73',
        spanInst,
        'sd_9wuSKUFh6hzu2k73'
      );
    }
  }

  async sd_lrT7M5q2CbxSEsoI(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lrT7M5q2CbxSEsoI');
    }
  }

  async sd_zoBnrC1n4UOpyP1b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zoBnrC1n4UOpyP1b',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.name[0];
      bh.file['email'] = bh.input.headers.email;
      console.log('this is file ==>', bh.file);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ryZoIcu71m73zoOg(bh, parentSpanInst);
      //appendnew_next_sd_zoBnrC1n4UOpyP1b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zoBnrC1n4UOpyP1b',
        spanInst,
        'sd_zoBnrC1n4UOpyP1b'
      );
    }
  }

  async sd_ryZoIcu71m73zoOg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ryZoIcu71m73zoOg',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().uploadFile(
        'sd_Kkkscf5YGu1U4UWP',
        'ID',
        bh.file.path,
        bh.file,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_yiQ14kGreKZdFWCX(bh, parentSpanInst);
      //appendnew_next_sd_ryZoIcu71m73zoOg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ryZoIcu71m73zoOg',
        spanInst,
        'sd_ryZoIcu71m73zoOg'
      );
    }
  }

  async sd_yiQ14kGreKZdFWCX(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yiQ14kGreKZdFWCX');
    }
  }

  async sd_GrGNRmpDEj7ARRCh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GrGNRmpDEj7ARRCh',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'ID.files',
      };

      console.log('data ', bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xnfxXs7VLbN3VMQd(bh, parentSpanInst);
      //appendnew_next_sd_GrGNRmpDEj7ARRCh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GrGNRmpDEj7ARRCh',
        spanInst,
        'sd_GrGNRmpDEj7ARRCh'
      );
    }
  }

  async sd_xnfxXs7VLbN3VMQd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xnfxXs7VLbN3VMQd',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WyMKxPz0OaZCL19S(bh, parentSpanInst);
      //appendnew_next_sd_xnfxXs7VLbN3VMQd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xnfxXs7VLbN3VMQd',
        spanInst,
        'sd_xnfxXs7VLbN3VMQd'
      );
    }
  }

  async sd_WyMKxPz0OaZCL19S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WyMKxPz0OaZCL19S',
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
        bh = await this.sd_KdIoWnVXziElRGyY(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WyMKxPz0OaZCL19S',
        spanInst,
        'sd_WyMKxPz0OaZCL19S'
      );
    }
  }

  async sd_KdIoWnVXziElRGyY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KdIoWnVXziElRGyY',
      parentSpanInst
    );
    try {
      bh.result = bh.result;
      console.log(bh.result);

      const data = bh.result.map((_data) => {
        return _data.filename;
      });
      console.log(data);

      data.forEach((item) => {
        bh.filter = { filename: item };
        console.log('Items ', item);
      });

      console.log('filter: ', bh.filter);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZyjSFv3KjKmepzTi(bh, parentSpanInst);
      //appendnew_next_sd_KdIoWnVXziElRGyY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KdIoWnVXziElRGyY',
        spanInst,
        'sd_KdIoWnVXziElRGyY'
      );
    }
  }

  async sd_ZyjSFv3KjKmepzTi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZyjSFv3KjKmepzTi',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().downloadFile(
        'sd_Kkkscf5YGu1U4UWP',
        'ID',
        bh.filter,
        bh
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_As8zhhUxbEUxT8iE(bh, parentSpanInst);
      //appendnew_next_sd_ZyjSFv3KjKmepzTi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZyjSFv3KjKmepzTi',
        spanInst,
        'sd_ZyjSFv3KjKmepzTi'
      );
    }
  }

  async sd_As8zhhUxbEUxT8iE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_As8zhhUxbEUxT8iE',
      parentSpanInst
    );
    try {
      console.log('results==>', bh.result);
      bh.file = bh.result;
      console.log('FIle data', bh.file);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_D5wrxhRLePWhfFR8(bh, parentSpanInst);
      //appendnew_next_sd_As8zhhUxbEUxT8iE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_As8zhhUxbEUxT8iE',
        spanInst,
        'sd_As8zhhUxbEUxT8iE'
      );
    }
  }

  async sd_D5wrxhRLePWhfFR8(bh, parentSpanInst) {
    try {
      bh.file.downloadStream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_D5wrxhRLePWhfFR8');
    }
  }

  async sd_5SttORk3wI8FbVVm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5SttORk3wI8FbVVm',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.name[0];
      bh.file['email'] = bh.input.headers.email;
      console.log('this is file ==>', bh.file);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Wf854XSt9WBdg1nl(bh, parentSpanInst);
      //appendnew_next_sd_5SttORk3wI8FbVVm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5SttORk3wI8FbVVm',
        spanInst,
        'sd_5SttORk3wI8FbVVm'
      );
    }
  }

  async sd_Wf854XSt9WBdg1nl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wf854XSt9WBdg1nl',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().uploadFile(
        'sd_Kkkscf5YGu1U4UWP',
        'Proof_of_residence',
        bh.file.path,
        bh.file,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_9RjZBgLzMVgweI05(bh, parentSpanInst);
      //appendnew_next_sd_Wf854XSt9WBdg1nl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wf854XSt9WBdg1nl',
        spanInst,
        'sd_Wf854XSt9WBdg1nl'
      );
    }
  }

  async sd_9RjZBgLzMVgweI05(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9RjZBgLzMVgweI05');
    }
  }

  async sd_dDght0ZI4yg4M5Xc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dDght0ZI4yg4M5Xc',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'Proof_of_residence.files',
      };

      console.log('data ', bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EqShxvWpQQe2wWLO(bh, parentSpanInst);
      //appendnew_next_sd_dDght0ZI4yg4M5Xc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dDght0ZI4yg4M5Xc',
        spanInst,
        'sd_dDght0ZI4yg4M5Xc'
      );
    }
  }

  async sd_EqShxvWpQQe2wWLO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EqShxvWpQQe2wWLO',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OZopbvLyMVNoe8gP(bh, parentSpanInst);
      //appendnew_next_sd_EqShxvWpQQe2wWLO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EqShxvWpQQe2wWLO',
        spanInst,
        'sd_EqShxvWpQQe2wWLO'
      );
    }
  }

  async sd_OZopbvLyMVNoe8gP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OZopbvLyMVNoe8gP',
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
        bh = await this.sd_8tpok6LYTE1Imo2b(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OZopbvLyMVNoe8gP',
        spanInst,
        'sd_OZopbvLyMVNoe8gP'
      );
    }
  }

  async sd_8tpok6LYTE1Imo2b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8tpok6LYTE1Imo2b',
      parentSpanInst
    );
    try {
      bh.result = bh.result;
      console.log(bh.result);

      const data = bh.result.map((_data) => {
        return _data.filename;
      });
      console.log(data);

      data.forEach((item) => {
        bh.filter = { filename: item };
        console.log('Items ', item);
      });

      console.log('filter: ', bh.filter);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Lgi6UhMtqWLhhRHX(bh, parentSpanInst);
      //appendnew_next_sd_8tpok6LYTE1Imo2b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8tpok6LYTE1Imo2b',
        spanInst,
        'sd_8tpok6LYTE1Imo2b'
      );
    }
  }

  async sd_Lgi6UhMtqWLhhRHX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Lgi6UhMtqWLhhRHX',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().downloadFile(
        'sd_Kkkscf5YGu1U4UWP',
        'Proof_of_residence',
        bh.filter,
        bh
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_upGAXVmvqELLpc83(bh, parentSpanInst);
      //appendnew_next_sd_Lgi6UhMtqWLhhRHX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Lgi6UhMtqWLhhRHX',
        spanInst,
        'sd_Lgi6UhMtqWLhhRHX'
      );
    }
  }

  async sd_upGAXVmvqELLpc83(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_upGAXVmvqELLpc83',
      parentSpanInst
    );
    try {
      console.log('results==>', bh.result);
      bh.file = bh.result;
      console.log('FIle data', bh.file);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_eTPPoJzmikEmSiRJ(bh, parentSpanInst);
      //appendnew_next_sd_upGAXVmvqELLpc83
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_upGAXVmvqELLpc83',
        spanInst,
        'sd_upGAXVmvqELLpc83'
      );
    }
  }

  async sd_eTPPoJzmikEmSiRJ(bh, parentSpanInst) {
    try {
      bh.file.downloadStream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eTPPoJzmikEmSiRJ');
    }
  }

  async sd_zbUMTZrJvaBA5Dhl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zbUMTZrJvaBA5Dhl',
      parentSpanInst
    );
    try {
      bh.file = bh.input.files.name[0];
      bh.file['email'] = bh.input.headers.email;
      console.log('this is file ==>', bh.file);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ym34dAPnNDCWLbwy(bh, parentSpanInst);
      //appendnew_next_sd_zbUMTZrJvaBA5Dhl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zbUMTZrJvaBA5Dhl',
        spanInst,
        'sd_zbUMTZrJvaBA5Dhl'
      );
    }
  }

  async sd_ym34dAPnNDCWLbwy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ym34dAPnNDCWLbwy',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().uploadFile(
        'sd_Kkkscf5YGu1U4UWP',
        'pictures',
        bh.file.path,
        bh.file,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_OrS6VBZIdKgBJiVL(bh, parentSpanInst);
      //appendnew_next_sd_ym34dAPnNDCWLbwy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ym34dAPnNDCWLbwy',
        spanInst,
        'sd_ym34dAPnNDCWLbwy'
      );
    }
  }

  async sd_OrS6VBZIdKgBJiVL(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OrS6VBZIdKgBJiVL');
    }
  }

  async sd_MkhvYE10xMiuwHR5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MkhvYE10xMiuwHR5',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'pictures.files',
      };

      console.log('data ', bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_W0MrJJqGQ1mg2Jtq(bh, parentSpanInst);
      //appendnew_next_sd_MkhvYE10xMiuwHR5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MkhvYE10xMiuwHR5',
        spanInst,
        'sd_MkhvYE10xMiuwHR5'
      );
    }
  }

  async sd_W0MrJJqGQ1mg2Jtq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_W0MrJJqGQ1mg2Jtq',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5x0ET9tvlUCq3oGO(bh, parentSpanInst);
      //appendnew_next_sd_W0MrJJqGQ1mg2Jtq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_W0MrJJqGQ1mg2Jtq',
        spanInst,
        'sd_W0MrJJqGQ1mg2Jtq'
      );
    }
  }

  async sd_5x0ET9tvlUCq3oGO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5x0ET9tvlUCq3oGO',
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
        bh = await this.sd_7UODO4qVKXNrT6Gc(bh, parentSpanInst);
      } else {
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5x0ET9tvlUCq3oGO',
        spanInst,
        'sd_5x0ET9tvlUCq3oGO'
      );
    }
  }

  async sd_7UODO4qVKXNrT6Gc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7UODO4qVKXNrT6Gc',
      parentSpanInst
    );
    try {
      bh.result = bh.result;
      console.log(bh.result);

      const data = bh.result.map((_data) => {
        return _data.filename;
      });
      console.log(data);

      data.forEach((item) => {
        bh.filter = { filename: item };
        console.log('Items ', item);
      });

      console.log('filter: ', bh.filter);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WLAWpv9Gi78L5OrY(bh, parentSpanInst);
      //appendnew_next_sd_7UODO4qVKXNrT6Gc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7UODO4qVKXNrT6Gc',
        spanInst,
        'sd_7UODO4qVKXNrT6Gc'
      );
    }
  }

  async sd_WLAWpv9Gi78L5OrY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WLAWpv9Gi78L5OrY',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().downloadFile(
        'sd_Kkkscf5YGu1U4UWP',
        'pictures',
        bh.filter,
        bh
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_x6ZS26aLvqifV7pn(bh, parentSpanInst);
      //appendnew_next_sd_WLAWpv9Gi78L5OrY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WLAWpv9Gi78L5OrY',
        spanInst,
        'sd_WLAWpv9Gi78L5OrY'
      );
    }
  }

  async sd_x6ZS26aLvqifV7pn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_x6ZS26aLvqifV7pn',
      parentSpanInst
    );
    try {
      console.log('results==>', bh.result);
      bh.file = bh.result;
      console.log('FIle data', bh.file);

      this.tracerService.sendData(spanInst, bh);
      await this.sd_tK05ogYSl1YjfcDG(bh, parentSpanInst);
      //appendnew_next_sd_x6ZS26aLvqifV7pn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_x6ZS26aLvqifV7pn',
        spanInst,
        'sd_x6ZS26aLvqifV7pn'
      );
    }
  }

  async sd_tK05ogYSl1YjfcDG(bh, parentSpanInst) {
    try {
      bh.file.downloadStream.pipe(bh.web.res);
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tK05ogYSl1YjfcDG');
    }
  }

  async sd_nEj1eKwM8CtiPwrf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nEj1eKwM8CtiPwrf',
      parentSpanInst
    );
    try {
      bh.search = {
        // query: { 'email': bh.input.body.email },
        collection: 'users',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OCzsvxlgAZmCDS8v(bh, parentSpanInst);
      //appendnew_next_sd_nEj1eKwM8CtiPwrf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nEj1eKwM8CtiPwrf',
        spanInst,
        'sd_nEj1eKwM8CtiPwrf'
      );
    }
  }

  async sd_OCzsvxlgAZmCDS8v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OCzsvxlgAZmCDS8v',
      parentSpanInst
    );
    try {
      let outputVariables = await this.toCheckIfTheUserExists(
        spanInst,
        bh.search
      );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_vtXdogcbNBnfuFIQ(bh, parentSpanInst);
      //appendnew_next_sd_OCzsvxlgAZmCDS8v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OCzsvxlgAZmCDS8v',
        spanInst,
        'sd_OCzsvxlgAZmCDS8v'
      );
    }
  }

  async sd_vtXdogcbNBnfuFIQ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vtXdogcbNBnfuFIQ');
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
  //appendnew_flow_authentication_Catch
}
