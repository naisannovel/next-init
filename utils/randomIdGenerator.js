export default function RandomIdGenerator(prefix = "uid_") {
    return (
      prefix + Date.now() + "_" + Math.floor(Math.random() * 9999999999)
    );
  }
  