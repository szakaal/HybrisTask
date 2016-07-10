var fs = require('fs');

/**
* Class for message logging.
*/
export class logger
{
  function construct(fileName, encoding = 'utf8')
  {
    this.encoding = encoding;
    this.writeStream = fs.createWriteStream(fileName, {flag: 'a'});
  }
  /**
  * Function writes msg into a log file and console
  */
  function log(msg)
  {
    this.writeStream.write(msg, this.encoding);
  }
  // Closes file stream
  function closeStream()
  {
    fs.close(this.writeStream);
  }
}
