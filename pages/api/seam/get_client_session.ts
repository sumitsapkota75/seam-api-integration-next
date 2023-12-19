import { Seam } from "seamapi";

const SeamAPIClient = async (req: any, res: any) => {
  // Handle authentication logic.
  const userId = req.auth.userId;

  // Pull any connected accounts associated with this user.
  // If the user will create connect webviews from the client using the client session token,
  // e.g., via the <ConnectAccountButton /> component,
  // ensure your application associates those connected account ids here,
  // otherwise the client will not see devices connected from those accounts.
  const accountsAssociatedWithUser = [{ seamConnectedAccountId: "..." }];

  const seam = new Seam();

  // Get or create the client session for the user.
  // Pass an array of connected_account_ids, connect_webview_ids or both.
  // If the client session already exists, Seam will update the allowed connected_account_ids
  // and connect_webview_ids to the latest value provided here.
  const clientSession = await seam.clientSessions.getOrCreate({
    user_identifier_key: userId,
    connected_account_ids: accountsAssociatedWithUser.map(
      (acc) => acc.seamConnectedAccountId
    ),
  });

  res.status(200).json({
    token: clientSession.token,
  });
};

export default SeamAPIClient;