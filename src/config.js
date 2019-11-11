export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_tF8qGEnNUnNZCic0HpZth4r400g7sh0nJj",
    s3: {
      REGION: "us-east-2",
      BUCKET: "andy-zhou-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://i1nc6uq88h.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_3s3FjzYPC",
      APP_CLIENT_ID: "776lk7ejmh97uec80r7h84iqcb",
      IDENTITY_POOL_ID: "us-east-2:52f25786-5cef-4aed-9edd-999b2c79ee1f"
    },
  };
  