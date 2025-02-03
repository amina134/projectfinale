const thriftedBookSchema = new mongoose.Schema({
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    condition: {
      type: String,
      enum: ['Like New', 'Good', 'Fair'],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }

  });
  
  const ThriftedBook = mongoose.model('ThriftedBook', thriftedBookSchema);
  
  module.exports = ThriftedBook;
  