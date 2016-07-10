var fs = require('fs');
/**
* Class for message logging.
*/
class logger
{
  constructor(fileName, encoding = 'utf8')
  {
    this.encoding = encoding;
    this.writeStream = fs.createWriteStream(fileName, {flag: 'a'});
  }
  /**
  * Function writes msg into a log file and console
  */
  log(msg)
  {
    this.writeStream.write(msg, this.encoding);
  }
  // Closes file stream
  closeStream()
  {
    fs.close(this.writeStream);
  }
}
module.exports = logger;
