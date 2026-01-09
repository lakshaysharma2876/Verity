export const getMe = async (req, res) => {
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    credibilityScore: req.user.credibilityScore,
    verifierTrustScore: req.user.verifierTrustScore,
  });
};