// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { EmailOutService } from '../../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as SSD_SERVICE_ID_sd_L5Ge8g2BzQJlhEXu from '../authentication'; //_splitter_
//append_imports_end
export class migration {
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
    this.serviceName = 'migration';
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
      instance = new migration(
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
    //appendnew_flow_migration_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: migration');
    //appendnew_flow_migration_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: migration');

    this.app['post'](
      `${this.serviceBasePath}/registration-m`,
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
          //appendnew_next_sd_DszVu5mYyVC28zWg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DszVu5mYyVC28zWg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_migration_HttpIn
  }
  //   service flows_migration

  //appendnew_flow_migration_start

  async filter(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('filter', parentSpanInst);
    try {
      bh.search = {
        query: { email: bh.input.body.email },
        collection: 'migrate',
      };

      bh.input.body['_id'] = new Date().getTime();
      bh.input.body['status'] = 'pending';
      bh.input.body['available_balance'] = bh.input.body['balance'];
      bh.input.body['cash_withdrawal_limit'] = 500;
      bh.input.body['card_purchases_limit'] = 500;
      bh.input.body['online_scan_to_pay_phone'] = 500;
      bh.input.body['cash_withdrawal_limit_temp'] = 500;
      bh.input.body['card_purchases_limit_temp'] = 500;
      bh.input.body['online_scan_to_pay_phone_temp'] = 500;
      bh.input.body['limit_counter'] = 0;
      bh.input.body['date'] = 'N/A';
      bh.input.body['registered'] = false;

      bh.input.body['fullName'] =
        bh.input.body['name'] + ' ' + bh.input.body['surname'];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pBGR4aClaMZnxsGA(bh, parentSpanInst);
      //appendnew_next_filter
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8LttuqwbGL9l7VrA',
        spanInst,
        'filter'
      );
    }
  }

  async sd_pBGR4aClaMZnxsGA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pBGR4aClaMZnxsGA',
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
      bh = await this.sd_mXY7QmdBvTmJJSJ4(bh, parentSpanInst);
      //appendnew_next_sd_pBGR4aClaMZnxsGA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pBGR4aClaMZnxsGA',
        spanInst,
        'sd_pBGR4aClaMZnxsGA'
      );
    }
  }

  async sd_mXY7QmdBvTmJJSJ4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mXY7QmdBvTmJJSJ4',
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
        bh = await this.sd_lL0HME43NeN95ahj(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mXY7QmdBvTmJJSJ4',
        spanInst,
        'sd_mXY7QmdBvTmJJSJ4'
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
      await this.sd_RuFCvgisADHCQYus(bh, parentSpanInst);
      //appendnew_next_ifError
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cApPAMBWdNwX8Xmi',
        spanInst,
        'ifError'
      );
    }
  }

  async sd_RuFCvgisADHCQYus(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RuFCvgisADHCQYus');
    }
  }

  async sd_lL0HME43NeN95ahj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lL0HME43NeN95ahj',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcrypt');
      console.log('Last script: ', bh.hashed);
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
      bh = await this.sd_dnMUmIqNoNYFCyIA(bh, parentSpanInst);
      //appendnew_next_sd_lL0HME43NeN95ahj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lL0HME43NeN95ahj',
        spanInst,
        'sd_lL0HME43NeN95ahj'
      );
    }
  }

  async sd_dnMUmIqNoNYFCyIA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dnMUmIqNoNYFCyIA',
      parentSpanInst
    );
    try {
      bh.payload = {
        to: bh.input.body.email,
        subject: 'REGISTRATION SUCCESSFUL',
        from: 'Capitec',
        body: `Your application to bank with Capitec has been sent.`,
        image: `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capitec_Bank_logo.svg/768px-Capitec_Bank_logo.svg.png" width="300px" height="80px"/>`,
      };

      bh.input.body['accountNumber'] = bh.accountNo;

      console.log(bh.payload);

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QzvphtmKNLphyMHz(bh, parentSpanInst);
      //appendnew_next_sd_dnMUmIqNoNYFCyIA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dnMUmIqNoNYFCyIA',
        spanInst,
        'sd_dnMUmIqNoNYFCyIA'
      );
    }
  }

  async sd_QzvphtmKNLphyMHz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QzvphtmKNLphyMHz',
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
      bh = await this.sd_YrSn7hUAjqhBsClY(bh, parentSpanInst);
      //appendnew_next_sd_QzvphtmKNLphyMHz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QzvphtmKNLphyMHz',
        spanInst,
        'sd_QzvphtmKNLphyMHz'
      );
    }
  }

  async sd_YrSn7hUAjqhBsClY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YrSn7hUAjqhBsClY',
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
      await this.sd_RuFCvgisADHCQYus(bh, parentSpanInst);
      //appendnew_next_sd_YrSn7hUAjqhBsClY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YrSn7hUAjqhBsClY',
        spanInst,
        'sd_YrSn7hUAjqhBsClY'
      );
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
  //appendnew_flow_migration_Catch
}
